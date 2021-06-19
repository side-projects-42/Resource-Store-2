# <img src="https://jestjs.io/img/jest.png" width="150" height="150" /> <img src="https://jestjs.io/img/circus.png" width="150" height="150" />

jest-circus

The next-gen test runner for Jest

## Overview

Circus is a flux-based test runner for Jest that is fast, easy to maintain, and simple to extend.

## Installation

Install `jest-circus` using yarn:

    yarn add --dev jest-circus

Or via npm:

    npm install --save-dev jest-circus

## Configure

Configure Jest to use `jest-circus` via the [`testRunner`](https://jestjs.io/docs/en/configuration#testrunner-string) option:

    {
      "testRunner": "jest-circus/runner"
    }

Or via CLI:

    jest --testRunner='jest-circus/runner'
