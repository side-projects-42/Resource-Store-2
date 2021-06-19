/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Config} from '@jest/types';
import {TestRunData} from './types';
import getNoTestFound from './getNoTestFound';
import getNoTestFoundRelatedToChangedFiles from './getNoTestFoundRelatedToChangedFiles';
import getNoTestFoundVerbose from './getNoTestFoundVerbose';
import getNoTestFoundFailed from './getNoTestFoundFailed';

export default function getNoTestsFoundMessage(
  testRunData: TestRunData,
  globalConfig: Config.GlobalConfig,
): string {
  if (globalConfig.onlyFailures) {
    return getNoTestFoundFailed();
  }
  if (globalConfig.onlyChanged) {
    return getNoTestFoundRelatedToChangedFiles(globalConfig);
  }
  return testRunData.length === 1 || globalConfig.verbose
    ? getNoTestFoundVerbose(testRunData, globalConfig)
    : getNoTestFound(testRunData, globalConfig);
}
