# Try Import [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/try-import/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/try-import)

Try to import a module, returning undefined if failed.

[![NPM Badge](https://nodei.co/npm/try-import.png)](https://npmjs.com/package/try-import)

## Install

```sh
npm install try-import
```

## Usage

```js
const tryImport = require("try-import");

tryImport("name");
//=> () => { ... }

tryImport.resolve("name");
//=> 'C:\Users\richi\Documents\GitHub\try-import\node_modules\name\src\index.js'
```

## API

### tryImport(name)

#### name

Type: `string`

The module to try to import.

### tryImport.resolve(name)

#### name

Type: `string`

The module to try to resolve.
