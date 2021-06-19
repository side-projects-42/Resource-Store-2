/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import myJestImport from 'jest';

// Running Jest like this is not officially supported,
// but it is common practice until there is a proper API as a substitute.
myJestImport.run(process.argv);
