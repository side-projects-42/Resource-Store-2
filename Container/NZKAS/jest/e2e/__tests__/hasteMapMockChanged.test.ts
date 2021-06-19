/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import path from 'path';
import JestHasteMap from 'jest-haste-map';
import {cleanup, writeFiles} from '../Utils';

// Directory must be here for Watchman to be enabled.
const DIR = path.resolve(__dirname, 'haste_map_mock_changed');

beforeEach(() => cleanup(DIR));
afterEach(() => cleanup(DIR));

test('should not warn when a mock file changes', async () => {
  const hasteConfig = {
    computeSha1: false,
    extensions: ['js', 'json', 'png'],
    forceNodeFilesystemAPI: false,
    ignorePattern: / ^/,
    maxWorkers: 2,
    mocksPattern: '__mocks__',
    name: 'tmp_' + Date.now(),
    platforms: [],
    retainAllFiles: false,
    rootDir: DIR,
    roots: [DIR],
    throwOnModuleCollision: true,
    useWatchman: true,
    watch: false,
  };

  // Populate the cache.
  writeFiles(DIR, {
    '__mocks__/fs.js': '"foo fs"',
  });
  await new JestHasteMap(hasteConfig).build();

  // This will throw if the mock file being updated triggers a warning.
  writeFiles(DIR, {
    '__mocks__/fs.js': '"foo fs!"',
  });
  await new JestHasteMap(hasteConfig).build();
});
