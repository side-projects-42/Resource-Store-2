/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {DeprecatedOptions, ValidationOptions} from './types';

import {logValidationWarning, DEPRECATION} from './utils';

const deprecationMessage = (message: string, options: ValidationOptions) => {
  const comment = options.comment;
  const name = (options.title && options.title.deprecation) || DEPRECATION;

  logValidationWarning(name, message, comment);
};

export const deprecationWarning = (
  config: {[key: string]: any},
  option: string,
  deprecatedOptions: DeprecatedOptions,
  options: ValidationOptions,
): boolean => {
  if (option in deprecatedOptions) {
    deprecationMessage(deprecatedOptions[option](config), options);

    return true;
  }

  return false;
};
