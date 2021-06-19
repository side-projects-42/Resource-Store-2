/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {EventEmitter} from 'events';
import {ForkOptions} from 'child_process';

// Because of the dynamic nature of a worker communication process, all messages
// coming from any of the other processes cannot be typed. Thus, many types
// include "unknown" as a TS type, which is (unfortunately) correct here.

export const CHILD_MESSAGE_INITIALIZE: 0 = 0;
export const CHILD_MESSAGE_CALL: 1 = 1;
export const CHILD_MESSAGE_END: 2 = 2;

export const PARENT_MESSAGE_OK: 0 = 0;
export const PARENT_MESSAGE_CLIENT_ERROR: 1 = 1;
export const PARENT_MESSAGE_SETUP_ERROR: 2 = 2;

export type PARENT_MESSAGE_ERROR =
  | typeof PARENT_MESSAGE_CLIENT_ERROR
  | typeof PARENT_MESSAGE_SETUP_ERROR;

// Option objects.

export {ForkOptions};

export interface WorkerPoolInterface {
  getStderr(): NodeJS.ReadableStream;
  getStdout(): NodeJS.ReadableStream;
  getWorkers(): Array<WorkerInterface>;
  createWorker(options: WorkerOptions): WorkerInterface;
  send(
    workerId: number,
    request: ChildMessage,
    onStart: OnStart,
    onEnd: OnEnd,
  ): void;
  end(): void;
}

export interface WorkerInterface {
  send(
    request: ChildMessage,
    onProcessStart: OnStart,
    onProcessEnd: OnEnd,
  ): void;
  getWorkerId(): number;
  getStderr(): NodeJS.ReadableStream | null;
  getStdout(): NodeJS.ReadableStream | null;
  onExit(exitCode: number): void;
  onMessage(message: ParentMessage): void;
}

export type FarmOptions = {
  computeWorkerKey?: (method: string, ...args: Array<unknown>) => string | null;
  exposedMethods?: ReadonlyArray<string>;
  forkOptions?: ForkOptions;
  setupArgs?: Array<unknown>;
  maxRetries?: number;
  numWorkers?: number;
  WorkerPool?: (
    workerPath: string,
    options?: WorkerPoolOptions,
  ) => WorkerPoolInterface;
  enableWorkerThreads?: boolean;
};

export type WorkerPoolOptions = {
  setupArgs: Array<unknown>;
  forkOptions: ForkOptions;
  maxRetries: number;
  numWorkers: number;
  enableWorkerThreads: boolean;
};

export type WorkerOptions = {
  forkOptions: ForkOptions;
  setupArgs: Array<unknown>;
  maxRetries: number;
  workerId: number;
  workerPath: string;
};

// Messages passed from the parent to the children.

export type MessagePort = typeof EventEmitter & {
  postMessage(message: unknown): void;
};

export type MessageChannel = {
  port1: MessagePort;
  port2: MessagePort;
};

export type ChildMessageInitialize = [
  typeof CHILD_MESSAGE_INITIALIZE, // type
  boolean, // processed
  string, // file
  Array<unknown> | undefined, // setupArgs
  MessagePort | undefined // MessagePort
];

export type ChildMessageCall = [
  typeof CHILD_MESSAGE_CALL, // type
  boolean, // processed
  string, // method
  Array<unknown> // args
];

export type ChildMessageEnd = [
  typeof CHILD_MESSAGE_END, // type
  boolean // processed
];

export type ChildMessage =
  | ChildMessageInitialize
  | ChildMessageCall
  | ChildMessageEnd;

// Messages passed from the children to the parent.

export type ParentMessageOk = [
  typeof PARENT_MESSAGE_OK, // type
  unknown // result
];

export type ParentMessageError = [
  PARENT_MESSAGE_ERROR, // type
  string, // constructor
  string, // message
  string, // stack
  unknown // extra
];

export type ParentMessage = ParentMessageOk | ParentMessageError;

// Queue types.

export type OnStart = (worker: WorkerInterface) => void;
export type OnEnd = (err: Error | null, result: unknown) => void;

export type QueueChildMessage = {
  request: ChildMessage;
  onStart: OnStart;
  onEnd: OnEnd;
};

export type QueueItem = {
  task: QueueChildMessage;
  next: QueueItem | null;
};
