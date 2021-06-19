/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import runJest from '../runJest';

test('works with nested event loops', () => {
  const result = runJest('nested-event-loop');
  expect(result.status).toBe(0);
});
