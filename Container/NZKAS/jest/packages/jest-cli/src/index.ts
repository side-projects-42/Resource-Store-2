/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// TODO: remove @jest/core exports for the next major
import {runCLI, SearchSource, TestScheduler, TestWatcher} from '@jest/core';
import {run} from './cli';
import {default as getVersion} from './version';

export = {
  SearchSource,
  TestScheduler,
  TestWatcher,
  getVersion,
  run,
  runCLI,
};
