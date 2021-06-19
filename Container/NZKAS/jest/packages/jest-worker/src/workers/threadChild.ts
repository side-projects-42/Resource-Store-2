/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// ESLint doesn't know about this experimental module
// eslint-disable-next-line import/no-unresolved
import {parentPort, isMainThread} from 'worker_threads';

import {
  ChildMessageInitialize,
  ChildMessageCall,
  CHILD_MESSAGE_CALL,
  CHILD_MESSAGE_END,
  CHILD_MESSAGE_INITIALIZE,
  PARENT_MESSAGE_CLIENT_ERROR,
  PARENT_MESSAGE_ERROR,
  PARENT_MESSAGE_SETUP_ERROR,
  PARENT_MESSAGE_OK,
} from '../types';

let file: string | null = null;
let setupArgs: Array<unknown> = [];
let initialized = false;

/**
 * This file is a small bootstrapper for workers. It sets up the communication
 * between the worker and the parent process, interpreting parent messages and
 * sending results back.
 *
 * The file loaded will be lazily initialized the first time any of the workers
 * is called. This is done for optimal performance: if the farm is initialized,
 * but no call is made to it, child Node processes will be consuming the least
 * possible amount of memory.
 *
 * If an invalid message is detected, the child will exit (by throwing) with a
 * non-zero exit code.
 */
parentPort!.on('message', (request: any) => {
  switch (request[0]) {
    case CHILD_MESSAGE_INITIALIZE:
      const init: ChildMessageInitialize = request;
      file = init[2];
      setupArgs = request[3];
      break;

    case CHILD_MESSAGE_CALL:
      const call: ChildMessageCall = request;
      execMethod(call[2], call[3]);
      break;

    case CHILD_MESSAGE_END:
      end();
      break;

    default:
      throw new TypeError(
        'Unexpected request from parent process: ' + request[0],
      );
  }
});

function reportSuccess(result: any) {
  if (isMainThread) {
    throw new Error('Child can only be used on a forked process');
  }

  parentPort!.postMessage([PARENT_MESSAGE_OK, result]);
}

function reportClientError(error: Error) {
  return reportError(error, PARENT_MESSAGE_CLIENT_ERROR);
}

function reportInitializeError(error: Error) {
  return reportError(error, PARENT_MESSAGE_SETUP_ERROR);
}

function reportError(error: Error, type: PARENT_MESSAGE_ERROR) {
  if (isMainThread) {
    throw new Error('Child can only be used on a forked process');
  }

  if (error == null) {
    error = new Error('"null" or "undefined" thrown');
  }

  parentPort!.postMessage([
    type,
    error.constructor && error.constructor.name,
    error.message,
    error.stack,
    typeof error === 'object' ? {...error} : error,
  ]);
}

function end(): void {
  const main = require(file!);

  if (!main.teardown) {
    exitProcess();

    return;
  }

  execFunction(main.teardown, main, [], exitProcess, exitProcess);
}

function exitProcess(): void {
  process.exit(0);
}

function execMethod(method: string, args: Array<any>): void {
  const main = require(file!);

  let fn: (...args: Array<unknown>) => unknown;

  if (method === 'default') {
    fn = main.__esModule ? main['default'] : main;
  } else {
    fn = main[method];
  }

  function execHelper() {
    execFunction(fn, main, args, reportSuccess, reportClientError);
  }

  if (initialized || !main.setup) {
    execHelper();

    return;
  }

  initialized = true;

  execFunction(main.setup, main, setupArgs, execHelper, reportInitializeError);
}

function execFunction(
  fn: (...args: Array<unknown>) => any,
  ctx: unknown,
  args: Array<unknown>,
  onResult: (result: unknown) => void,
  onError: (error: Error) => void,
): void {
  let result;

  try {
    result = fn.apply(ctx, args);
  } catch (err) {
    onError(err);

    return;
  }

  if (result && typeof result.then === 'function') {
    result.then(onResult, onError);
  } else {
    onResult(result);
  }
}
