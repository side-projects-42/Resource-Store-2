/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {AssertionError} from 'assert';
import {
  diff,
  printExpected,
  printReceived,
  DiffOptions,
} from 'jest-matcher-utils';
import chalk from 'chalk';
import prettyFormat from 'pretty-format';
import {Event, State, TestError} from './types';

interface AssertionErrorWithStack extends AssertionError {
  stack: string;
}

const assertOperatorsMap: {[key: string]: string} = {
  '!=': 'notEqual',
  '!==': 'notStrictEqual',
  '==': 'equal',
  '===': 'strictEqual',
};

const humanReadableOperators: {[key: string]: string} = {
  deepEqual: 'to deeply equal',
  deepStrictEqual: 'to deeply and strictly equal',
  equal: 'to be equal',
  notDeepEqual: 'not to deeply equal',
  notDeepStrictEqual: 'not to deeply and strictly equal',
  notEqual: 'to not be equal',
  notStrictEqual: 'not be strictly equal',
  strictEqual: 'to strictly be equal',
};

const formatNodeAssertErrors = (event: Event, state: State) => {
  switch (event.name) {
    case 'test_done': {
      event.test.errors = event.test.errors.map((errors: TestError) => {
        let error;
        if (Array.isArray(errors)) {
          const [originalError, asyncError] = errors;

          if (originalError == null) {
            error = asyncError;
          } else if (!originalError.stack) {
            error = asyncError;

            error.message = originalError.message
              ? originalError.message
              : `thrown: ${prettyFormat(originalError, {maxDepth: 3})}`;
          } else {
            error = originalError;
          }
        } else {
          error = errors;
        }
        return error.code === 'ERR_ASSERTION'
          ? {message: assertionErrorMessage(error, {expand: state.expand})}
          : errors;
      });
    }
  }
};

const getOperatorName = (operator: string | undefined, stack: string) => {
  if (typeof operator === 'string') {
    return assertOperatorsMap[operator] || operator;
  }
  if (stack.match('.doesNotThrow')) {
    return 'doesNotThrow';
  }
  if (stack.match('.throws')) {
    return 'throws';
  }
  return '';
};

const operatorMessage = (operator: string | undefined) => {
  const niceOperatorName = getOperatorName(operator, '');
  const humanReadableOperator = humanReadableOperators[niceOperatorName];

  return typeof operator === 'string'
    ? `${humanReadableOperator || niceOperatorName} to:\n`
    : '';
};

const assertThrowingMatcherHint = (operatorName: string) =>
  chalk.dim('assert') +
  chalk.dim('.' + operatorName + '(') +
  chalk.red('function') +
  chalk.dim(')');

const assertMatcherHint = (
  operator: string | undefined | null,
  operatorName: string,
) => {
  let message =
    chalk.dim('assert') +
    chalk.dim('.' + operatorName + '(') +
    chalk.red('received') +
    chalk.dim(', ') +
    chalk.green('expected') +
    chalk.dim(')');

  if (operator === '==') {
    message +=
      ' or ' +
      chalk.dim('assert') +
      chalk.dim('(') +
      chalk.red('received') +
      chalk.dim(') ');
  }

  return message;
};

function assertionErrorMessage(
  error: AssertionErrorWithStack,
  options: DiffOptions,
) {
  const {expected, actual, generatedMessage, message, operator, stack} = error;
  const diffString = diff(expected, actual, options);
  const hasCustomMessage = !generatedMessage;
  const operatorName = getOperatorName(operator, stack);
  const trimmedStack = stack
    .replace(message, '')
    .replace(/AssertionError(.*)/g, '');

  if (operatorName === 'doesNotThrow') {
    return (
      assertThrowingMatcherHint(operatorName) +
      '\n\n' +
      chalk.reset(`Expected the function not to throw an error.\n`) +
      chalk.reset(`Instead, it threw:\n`) +
      `  ${printReceived(actual)}` +
      chalk.reset(hasCustomMessage ? '\n\nMessage:\n  ' + message : '') +
      trimmedStack
    );
  }

  if (operatorName === 'throws') {
    return (
      assertThrowingMatcherHint(operatorName) +
      '\n\n' +
      chalk.reset(`Expected the function to throw an error.\n`) +
      chalk.reset(`But it didn't throw anything.`) +
      chalk.reset(hasCustomMessage ? '\n\nMessage:\n  ' + message : '') +
      trimmedStack
    );
  }

  return (
    assertMatcherHint(operator, operatorName) +
    '\n\n' +
    chalk.reset(`Expected value ${operatorMessage(operator)}`) +
    `  ${printExpected(expected)}\n` +
    chalk.reset(`Received:\n`) +
    `  ${printReceived(actual)}` +
    chalk.reset(hasCustomMessage ? '\n\nMessage:\n  ' + message : '') +
    (diffString ? `\n\nDifference:\n\n${diffString}` : '') +
    trimmedStack
  );
}

export default formatNodeAssertErrors;
