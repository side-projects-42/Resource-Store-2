/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const lib = require('foo');

it('should work', () => {
  expect(process.versions.pnp).toBeTruthy();
  expect(lib()).toEqual(42);
});
