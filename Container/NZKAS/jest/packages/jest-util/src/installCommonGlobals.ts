/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import fs from 'fs';
import {Config} from '@jest/types';
import createProcessObject from './createProcessObject';
import deepCyclicCopy from './deepCyclicCopy';

const DTRACE = Object.keys(global).filter(key => key.startsWith('DTRACE'));

export default function(
  globalObject: NodeJS.Global,
  globals: Config.ConfigGlobals,
): NodeJS.Global & Config.ConfigGlobals {
  globalObject.process = createProcessObject();

  const symbol = (globalObject.Symbol as unknown) as SymbolConstructor;
  // Keep a reference to some globals that Jest needs
  Object.defineProperties(globalObject, {
    [symbol.for('jest-native-promise')]: {
      enumerable: false,
      value: Promise,
      writable: false,
    },
    [symbol.for('jest-native-now')]: {
      enumerable: false,
      value: globalObject.Date.now.bind(globalObject.Date),
      writable: false,
    },
    [symbol.for('jest-native-read-file')]: {
      enumerable: false,
      value: fs.readFileSync.bind(fs),
      writable: false,
    },
    [symbol.for('jest-native-write-file')]: {
      enumerable: false,
      value: fs.writeFileSync.bind(fs),
      writable: false,
    },
    [symbol.for('jest-native-exists-file')]: {
      enumerable: false,
      value: fs.existsSync.bind(fs),
      writable: false,
    },
    'jest-symbol-do-not-touch': {
      enumerable: false,
      value: symbol,
      writable: false,
    },
  });

  // Forward some APIs.
  DTRACE.forEach(dtrace => {
    // @ts-ignore: no index
    globalObject[dtrace] = function(...args: Array<any>) {
      // @ts-ignore: no index
      return global[dtrace].apply(this, args);
    };
  });

  // Forward some others (this breaks the sandbox but for now it's OK).
  globalObject.Buffer = global.Buffer;
  globalObject.setImmediate = global.setImmediate;
  globalObject.clearImmediate = global.clearImmediate;

  return Object.assign(globalObject, deepCyclicCopy(globals));
}
