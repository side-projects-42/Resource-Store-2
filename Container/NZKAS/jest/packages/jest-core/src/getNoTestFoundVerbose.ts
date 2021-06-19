// Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.

import chalk from 'chalk';
import {Config} from '@jest/types';
import pluralize from './pluralize';
import {Stats, TestRunData} from './types';

export default function getNoTestFoundVerbose(
  testRunData: TestRunData,
  globalConfig: Config.GlobalConfig,
): string {
  const individualResults = testRunData.map(testRun => {
    const stats = testRun.matches.stats || ({} as Stats);
    const config = testRun.context.config;
    const statsMessage = (Object.keys(stats) as Array<keyof Stats>)
      .map(key => {
        if (key === 'roots' && config.roots.length === 1) {
          return null;
        }
        const value = config[key];
        if (value) {
          const valueAsString = Array.isArray(value) ? value.join(', ') : value;
          const matches = pluralize('match', stats[key], 'es');
          return `  ${key}: ${chalk.yellow(valueAsString)} - ${matches}`;
        }
        return null;
      })
      .filter(line => line)
      .join('\n');

    return testRun.matches.total
      ? `In ${chalk.bold(config.rootDir)}\n` +
          `  ${pluralize('file', testRun.matches.total || 0, 's')} checked.\n` +
          statsMessage
      : `No files found in ${config.rootDir}.\n` +
          `Make sure Jest's configuration does not exclude this directory.` +
          `\nTo set up Jest, make sure a package.json file exists.\n` +
          `Jest Documentation: ` +
          `facebook.github.io/jest/docs/configuration.html`;
  });
  let dataMessage;

  if (globalConfig.runTestsByPath) {
    dataMessage = `Files: ${globalConfig.nonFlagArgs
      .map(p => `"${p}"`)
      .join(', ')}`;
  } else {
    dataMessage = `Pattern: ${chalk.yellow(
      globalConfig.testPathPattern,
    )} - 0 matches`;
  }

  return (
    chalk.bold('No tests found, exiting with code 1') +
    '\n' +
    'Run with `--passWithNoTests` to exit with code 0' +
    '\n' +
    individualResults.join('\n') +
    '\n' +
    dataMessage
  );
}
