/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import os from 'os';
import WorkerPool from './WorkerPool';
import Farm from './Farm';
import {WorkerPoolInterface, WorkerPoolOptions, FarmOptions} from './types';

function getExposedMethods(
  workerPath: string,
  options: FarmOptions,
): ReadonlyArray<string> {
  let exposedMethods = options.exposedMethods;

  // If no methods list is given, try getting it by auto-requiring the module.
  if (!exposedMethods) {
    const module: Function | Record<string, any> = require(workerPath);

    exposedMethods = Object.keys(module).filter(
      // @ts-ignore: no index
      name => typeof module[name] === 'function',
    );

    if (typeof module === 'function') {
      exposedMethods = [...exposedMethods, 'default'];
    }
  }

  return exposedMethods;
}

/**
 * The Jest farm (publicly called "Worker") is a class that allows you to queue
 * methods across multiple child processes, in order to parallelize work. This
 * is done by providing an absolute path to a module that will be loaded on each
 * of the child processes, and bridged to the main process.
 *
 * Bridged methods are specified by using the "exposedMethods" property of the
 * "options" object. This is an array of strings, where each of them corresponds
 * to the exported name in the loaded module.
 *
 * You can also control the amount of workers by using the "numWorkers" property
 * of the "options" object, and the settings passed to fork the process through
 * the "forkOptions" property. The amount of workers defaults to the amount of
 * CPUS minus one.
 *
 * Queueing calls can be done in two ways:
 *   - Standard method: calls will be redirected to the first available worker,
 *     so they will get executed as soon as they can.
 *
 *   - Sticky method: if a "computeWorkerKey" method is provided within the
 *     config, the resulting string of this method will be used as a key.
 *     Every time this key is returned, it is guaranteed that your job will be
 *     processed by the same worker. This is specially useful if your workers
 *     are caching results.
 */
export default class JestWorker {
  private _ending: boolean;
  private _farm: Farm;
  private _options: FarmOptions;
  private _workerPool: WorkerPoolInterface;

  constructor(workerPath: string, options?: FarmOptions) {
    this._options = {...options};
    this._ending = false;

    const workerPoolOptions: WorkerPoolOptions = {
      enableWorkerThreads: this._options.enableWorkerThreads || false,
      forkOptions: this._options.forkOptions || {},
      maxRetries: this._options.maxRetries || 3,
      numWorkers: this._options.numWorkers || Math.max(os.cpus().length - 1, 1),
      setupArgs: this._options.setupArgs || [],
    };

    if (this._options.WorkerPool) {
      // @ts-ignore: constructor target any?
      this._workerPool = new this._options.WorkerPool(
        workerPath,
        workerPoolOptions,
      );
    } else {
      this._workerPool = new WorkerPool(workerPath, workerPoolOptions);
    }

    this._farm = new Farm(
      workerPoolOptions.numWorkers,
      this._workerPool.send.bind(this._workerPool),
      this._options.computeWorkerKey,
    );

    this._bindExposedWorkerMethods(workerPath, this._options);
  }

  private _bindExposedWorkerMethods(
    workerPath: string,
    options: FarmOptions,
  ): void {
    getExposedMethods(workerPath, options).forEach(name => {
      if (name.startsWith('_')) {
        return;
      }

      if (this.constructor.prototype.hasOwnProperty(name)) {
        throw new TypeError('Cannot define a method called ' + name);
      }

      // @ts-ignore: dynamic extension of the class instance is expected.
      this[name] = this._callFunctionWithArgs.bind(this, name);
    });
  }

  private _callFunctionWithArgs(
    method: string,
    ...args: Array<any>
  ): Promise<any> {
    if (this._ending) {
      throw new Error('Farm is ended, no more calls can be done to it');
    }

    return this._farm.doWork(method, ...args);
  }

  getStderr(): NodeJS.ReadableStream {
    return this._workerPool.getStderr();
  }

  getStdout(): NodeJS.ReadableStream {
    return this._workerPool.getStdout();
  }

  end(): void {
    if (this._ending) {
      throw new Error('Farm is ended, no more calls can be done to it');
    }

    this._workerPool.end();

    this._ending = true;
  }
}
