/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

test('setImmediate test', () => {
  expect(true).toBe(true);

  setImmediate(() => {
    throw new Error('Scheduled Error');
  });
});
