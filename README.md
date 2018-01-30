# the-git-commit

> Nano nodejs module to get information of any git commit.

[![Ver](https://img.shields.io/npm/v/the-git-commit.svg)](https://www.npmjs.com/package/the-git-commit) [![Build Status](https://travis-ci.org/hustcc/the-git-commit.svg?branch=master)](https://travis-ci.org/hustcc/the-git-commit) [![Coverage Status](https://coveralls.io/repos/github/hustcc/the-git-commit/badge.svg?branch=master)](https://coveralls.io/github/hustcc/the-git-commit)

## Usage

```js
var TGM = require('the-git-commit');

// lastease commit of current dir
new TGM().info();

// lastease commit of `the-git-commit`
new TGM('/home/hustcc/the-git-commit').info();

// the commit of current dir
new TGM().info('a63e1b4');

// the commit of `the-git-commit`
new TGM('/home/hustcc/the-git-commit').info('a63e1b488ac24759276a2de414122e7bca4351be');
```

Then get:

```js
{
  hash: 'a41d55c100ae3e47a4781b7215cc2b5578fb59de',
  short: 'a41d55c',
  merge: ['54df71f', 'f8d50c8'],
  author: 'hustcc',
  email: 'i@hust.cc',
  date: 'Mon Dec 18 20:26:34 2017 +0800',
  message: 'Merge branch \'release_20171218\' of fixed-1'
}

```


## LICENSE

[MIT](https://github.com/hustcc).