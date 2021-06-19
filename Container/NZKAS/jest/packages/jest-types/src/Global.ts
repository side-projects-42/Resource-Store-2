/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {CoverageMapData} from 'istanbul-lib-coverage';

export type DoneFn = (reason?: string | Error) => void;
export type TestName = string;
export type TestFn = (done?: DoneFn) => Promise<any> | void | undefined;
export type BlockFn = () => void;
export type BlockName = string;

export type Col = unknown;
export type Row = Array<Col>;
export type Table = Array<Row>;
export type ArrayTable = Table | Row;
export type TemplateTable = TemplateStringsArray;
export type TemplateData = Array<unknown>;
export type EachTable = ArrayTable | TemplateTable;
export type EachTestFn = (
  ...args: Array<any>
) => Promise<any> | void | undefined;

// TODO: Get rid of this at some point
type Jasmine = {_DEFAULT_TIMEOUT_INTERVAL?: number; addMatchers: Function};

type Each = (
  table: EachTable,
  ...taggedTemplateData: Array<unknown>
) => (title: string, test: EachTestFn, timeout?: number) => void;

export interface ItBase {
  (testName: TestName, fn: TestFn, timeout?: number): void;
  each: Each;
}

export interface It extends ItBase {
  only: ItBase;
  skip: ItBase;
  todo: (testName: TestName, ...rest: Array<any>) => void;
}

export interface ItConcurrentBase {
  (testName: string, testFn: () => Promise<any>, timeout?: number): void;
}

export interface ItConcurrentExtended extends ItConcurrentBase {
  only: ItConcurrentBase;
  skip: ItConcurrentBase;
}

export interface ItConcurrent extends It {
  concurrent: ItConcurrentExtended;
}

export interface DescribeBase {
  (blockName: BlockName, blockFn: BlockFn): void;
  each: Each;
}

export interface Describe extends DescribeBase {
  only: DescribeBase;
  skip: DescribeBase;
}

// TODO: Maybe add `| Window` in the future?
export interface Global extends NodeJS.Global {
  it: ItConcurrent;
  test: ItConcurrent;
  fit: ItBase & {concurrent?: ItConcurrentBase};
  xit: ItBase;
  xtest: ItBase;
  describe: Describe;
  xdescribe: DescribeBase;
  fdescribe: DescribeBase;
  __coverage__: CoverageMapData;
  jasmine: Jasmine;
  fail: () => void;
  pending: () => void;
  spyOn: () => void;
  spyOnProperty: () => void;
}

declare global {
  module NodeJS {
    interface Global {
      it: It;
      test: ItConcurrent;
      fit: ItBase;
      xit: ItBase;
      xtest: ItBase;
      describe: Describe;
      xdescribe: DescribeBase;
      fdescribe: DescribeBase;
      jasmine: Jasmine;
    }
  }
}
