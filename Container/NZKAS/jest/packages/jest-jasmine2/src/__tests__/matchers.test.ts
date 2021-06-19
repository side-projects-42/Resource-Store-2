/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

describe('matchers', () => {
  it('proxies matchers to expect', () => {
    expect(() => expect(1).toBe(2)).toThrowErrorMatchingSnapshot();
  });
});
