# jest-changed-files

A module used internally by Jest to check which files have changed since you last committed in git or hg.

## Install

    $ npm install --save jest-changed-files

## API

### `getChangedFilesForRoots(roots: <Array<string>>, options: ?object): Promise<?object>`

Get the list of files and repos that have changed since the last commit.

#### Parameters

roots: Array of string paths gathered from [jest roots](https://jestjs.io/docs/configuration.html#roots-array-string).

options: Object literal with keys

- lastCommit: boolean
- withAncestor: boolean

### findRepos(roots: &lt;Array&gt;): Promise

Get a set of git and hg repositories.

#### Parameters

roots: Array of string paths gathered from [jest roots](https://jestjs.io/docs/configuration.html#roots-array-string).

## Usage

    import {getChangedFilesForRoots} from 'jest-changed-files';

    getChangedFilesForRoots(['/path/to/test'], {
      lastCommit: true,
      withAncestor: true,
    }).then((files) => {
      /*
      {
        repos: [],
        changedFiles: []
      }
      */
    });

    import {findRepos} from 'jest-changed-files';

    findRepos(['/path/to/test']).then((repos) => {
      /*
      {
        git: Set<Path>,
        hg: Set<Path>
      }
      */
    });
