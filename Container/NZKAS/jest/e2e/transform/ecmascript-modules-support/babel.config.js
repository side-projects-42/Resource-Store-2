// Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: 'commonjs',
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
