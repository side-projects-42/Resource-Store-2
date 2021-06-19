/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import path from 'path';
import {wrap} from 'jest-snapshot-serializer-raw';
import {run} from '../Utils';
import runJest from '../runJest';

it('instruments and collects coverage for typescript files', () => {
  const dir = path.resolve(__dirname, '../typescript-coverage');
  run('yarn', dir);
  const {stdout} = runJest(dir, ['--coverage', '--no-cache'], {
    stripAnsi: true,
  });
  expect(wrap(stdout)).toMatchSnapshot();
});
