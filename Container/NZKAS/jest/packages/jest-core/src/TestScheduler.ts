/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import chalk from 'chalk';
import {formatExecError} from 'jest-message-util';
import {Config} from '@jest/types';
import snapshot from 'jest-snapshot';
import TestRunner, {Test} from 'jest-runner';
import {Context} from 'jest-runtime';
import {
  CoverageReporter,
  DefaultReporter,
  NotifyReporter,
  SummaryReporter,
  VerboseReporter,
  Reporter,
} from '@jest/reporters';
import exit from 'exit';
import {
  addResult,
  AggregatedResult,
  buildFailureTestResult,
  makeEmptyAggregatedTestResult,
  SerializableError,
  TestResult,
} from '@jest/test-result';
import ReporterDispatcher from './ReporterDispatcher';
import TestWatcher from './TestWatcher';
import {shouldRunInBand} from './testSchedulerHelper';

// The default jest-runner is required because it is the default test runner
// and required implicitly through the `runner` ProjectConfig option.
TestRunner;

export type TestSchedulerOptions = {
  startRun: (globalConfig: Config.GlobalConfig) => void;
};
export type TestSchedulerContext = {
  firstRun: boolean;
  previousSuccess: boolean;
  changedFiles?: Set<Config.Path>;
};
export default class TestScheduler {
  private _dispatcher: ReporterDispatcher;
  private _globalConfig: Config.GlobalConfig;
  private _options: TestSchedulerOptions;
  private _context: TestSchedulerContext;

  constructor(
    globalConfig: Config.GlobalConfig,
    options: TestSchedulerOptions,
    context: TestSchedulerContext,
  ) {
    this._dispatcher = new ReporterDispatcher();
    this._globalConfig = globalConfig;
    this._options = options;
    this._context = context;
    this._setupReporters();
  }

  addReporter(reporter: Reporter) {
    this._dispatcher.register(reporter);
  }

  removeReporter(ReporterClass: Function) {
    this._dispatcher.unregister(ReporterClass);
  }

  async scheduleTests(tests: Array<Test>, watcher: TestWatcher) {
    const onStart = this._dispatcher.onTestStart.bind(this._dispatcher);
    const timings: Array<number> = [];
    const contexts = new Set();
    tests.forEach(test => {
      contexts.add(test.context);
      if (test.duration) {
        timings.push(test.duration);
      }
    });

    const aggregatedResults = createAggregatedResults(tests.length);
    const estimatedTime = Math.ceil(
      getEstimatedTime(timings, this._globalConfig.maxWorkers) / 1000,
    );

    const runInBand = shouldRunInBand(
      tests,
      this._globalConfig.watch || this._globalConfig.watchAll,
      this._globalConfig.maxWorkers,
      timings,
    );

    const onResult = async (test: Test, testResult: TestResult) => {
      if (watcher.isInterrupted()) {
        return Promise.resolve();
      }

      if (testResult.testResults.length === 0) {
        const message = 'Your test suite must contain at least one test.';

        return onFailure(test, {
          message,
          stack: new Error(message).stack,
        });
      }

      // Throws when the context is leaked after executing a test.
      if (testResult.leaks) {
        const message =
          chalk.red.bold('EXPERIMENTAL FEATURE!\n') +
          'Your test suite is leaking memory. Please ensure all references are cleaned.\n' +
          '\n' +
          'There is a number of things that can leak memory:\n' +
          '  - Async operations that have not finished (e.g. fs.readFile).\n' +
          '  - Timers not properly mocked (e.g. setInterval, setTimeout).\n' +
          '  - Keeping references to the global scope.';

        return onFailure(test, {
          message,
          stack: new Error(message).stack,
        });
      }

      addResult(aggregatedResults, testResult);
      await this._dispatcher.onTestResult(test, testResult, aggregatedResults);
      return this._bailIfNeeded(contexts, aggregatedResults, watcher);
    };

    const onFailure = async (test: Test, error: SerializableError) => {
      if (watcher.isInterrupted()) {
        return;
      }
      const testResult = buildFailureTestResult(test.path, error);
      testResult.failureMessage = formatExecError(
        testResult.testExecError,
        test.context.config,
        this._globalConfig,
        test.path,
      );
      addResult(aggregatedResults, testResult);
      await this._dispatcher.onTestResult(test, testResult, aggregatedResults);
    };

    const updateSnapshotState = () => {
      contexts.forEach(context => {
        const status = snapshot.cleanup(
          context.hasteFS,
          this._globalConfig.updateSnapshot,
          snapshot.buildSnapshotResolver(context.config),
        );

        aggregatedResults.snapshot.filesRemoved += status.filesRemoved;
      });
      const updateAll = this._globalConfig.updateSnapshot === 'all';
      aggregatedResults.snapshot.didUpdate = updateAll;
      aggregatedResults.snapshot.failure = !!(
        !updateAll &&
        (aggregatedResults.snapshot.unchecked ||
          aggregatedResults.snapshot.unmatched ||
          aggregatedResults.snapshot.filesRemoved)
      );
    };

    await this._dispatcher.onRunStart(aggregatedResults, {
      estimatedTime,
      showStatus: !runInBand,
    });

    const testRunners = Object.create(null);
    contexts.forEach(({config}) => {
      if (!testRunners[config.runner]) {
        const Runner: typeof TestRunner = require(config.runner);
        testRunners[config.runner] = new Runner(this._globalConfig, {
          changedFiles: this._context && this._context.changedFiles,
        });
      }
    });

    const testsByRunner = this._partitionTests(testRunners, tests);

    if (testsByRunner) {
      try {
        for (const runner of Object.keys(testRunners)) {
          await testRunners[runner].runTests(
            testsByRunner[runner],
            watcher,
            onStart,
            onResult,
            onFailure,
            {
              serial: runInBand || Boolean(testRunners[runner].isSerial),
            },
          );
        }
      } catch (error) {
        if (!watcher.isInterrupted()) {
          throw error;
        }
      }
    }

    updateSnapshotState();
    aggregatedResults.wasInterrupted = watcher.isInterrupted();
    await this._dispatcher.onRunComplete(contexts, aggregatedResults);

    const anyTestFailures = !(
      aggregatedResults.numFailedTests === 0 &&
      aggregatedResults.numRuntimeErrorTestSuites === 0
    );
    const anyReporterErrors = this._dispatcher.hasErrors();

    aggregatedResults.success = !(
      anyTestFailures ||
      aggregatedResults.snapshot.failure ||
      anyReporterErrors
    );

    return aggregatedResults;
  }

  private _partitionTests(
    testRunners: {[key: string]: TestRunner},
    tests: Array<Test>,
  ) {
    if (Object.keys(testRunners).length > 1) {
      return tests.reduce((testRuns, test) => {
        const runner = test.context.config.runner;
        if (!testRuns[runner]) {
          testRuns[runner] = [];
        }
        testRuns[runner].push(test);
        return testRuns;
      }, Object.create(null));
    } else if (tests.length > 0 && tests[0] != null) {
      // If there is only one runner, don't partition the tests.
      return Object.assign(Object.create(null), {
        [tests[0].context.config.runner]: tests,
      });
    } else {
      return null;
    }
  }

  private _shouldAddDefaultReporters(
    reporters?: Array<string | Config.ReporterConfig>,
  ): boolean {
    return (
      !reporters ||
      !!reporters.find(
        reporter => this._getReporterProps(reporter).path === 'default',
      )
    );
  }

  private _setupReporters() {
    const {collectCoverage, notify, reporters} = this._globalConfig;
    const isDefault = this._shouldAddDefaultReporters(reporters);

    if (isDefault) {
      this._setupDefaultReporters(collectCoverage);
    }

    if (!isDefault && collectCoverage) {
      this.addReporter(
        new CoverageReporter(this._globalConfig, {
          changedFiles: this._context && this._context.changedFiles,
        }),
      );
    }

    if (notify) {
      this.addReporter(
        new NotifyReporter(
          this._globalConfig,
          this._options.startRun,
          this._context,
        ),
      );
    }

    if (reporters && Array.isArray(reporters)) {
      this._addCustomReporters(reporters);
    }
  }

  private _setupDefaultReporters(collectCoverage: boolean) {
    this.addReporter(
      this._globalConfig.verbose
        ? new VerboseReporter(this._globalConfig)
        : new DefaultReporter(this._globalConfig),
    );

    if (collectCoverage) {
      this.addReporter(
        new CoverageReporter(this._globalConfig, {
          changedFiles: this._context && this._context.changedFiles,
        }),
      );
    }

    this.addReporter(new SummaryReporter(this._globalConfig));
  }

  private _addCustomReporters(
    reporters: Array<string | Config.ReporterConfig>,
  ) {
    reporters.forEach(reporter => {
      const {options, path} = this._getReporterProps(reporter);

      if (path === 'default') return;

      try {
        const Reporter = require(path);
        this.addReporter(new Reporter(this._globalConfig, options));
      } catch (error) {
        throw new Error(
          'An error occurred while adding the reporter at path "' +
            path +
            '".' +
            error.message,
        );
      }
    });
  }

  /**
   * Get properties of a reporter in an object
   * to make dealing with them less painful.
   */
  private _getReporterProps(
    reporter: string | Config.ReporterConfig,
  ): {path: string; options: {[key: string]: unknown}} {
    if (typeof reporter === 'string') {
      return {options: this._options, path: reporter};
    } else if (Array.isArray(reporter)) {
      const [path, options] = reporter;
      return {options, path};
    }

    throw new Error('Reporter should be either a string or an array');
  }

  private _bailIfNeeded(
    contexts: Set<Context>,
    aggregatedResults: AggregatedResult,
    watcher: TestWatcher,
  ): Promise<void> {
    if (
      this._globalConfig.bail !== 0 &&
      aggregatedResults.numFailedTests >= this._globalConfig.bail
    ) {
      if (watcher.isWatchMode()) {
        watcher.setState({interrupted: true});
      } else {
        const failureExit = () => exit(1);

        return this._dispatcher
          .onRunComplete(contexts, aggregatedResults)
          .then(failureExit)
          .catch(failureExit);
      }
    }
    return Promise.resolve();
  }
}

const createAggregatedResults = (numTotalTestSuites: number) => {
  const result = makeEmptyAggregatedTestResult();
  result.numTotalTestSuites = numTotalTestSuites;
  result.startTime = Date.now();
  result.success = false;
  return result;
};

const getEstimatedTime = (timings: Array<number>, workers: number) => {
  if (!timings.length) {
    return 0;
  }

  const max = Math.max.apply(null, timings);
  return timings.length <= workers
    ? max
    : Math.max(timings.reduce((sum, time) => sum + time) / workers, max);
};
