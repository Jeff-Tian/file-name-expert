# file-name-expert

> Filename expert.

[![Build Status](https://travis-ci.com/Jeff-Tian/file-name-expert.svg?branch=master)](https://travis-ci.com/Jeff-Tian/file-name-expert)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=Jeff-Tian_file-name-expert)](https://sonarcloud.io/dashboard?id=Jeff-Tian_file-name-expert)

## Installation

```shell
npm i file-name-expert --save
```

## Usage

### Get file name from url

#### note: CommonJS usage

In order to gain the TypeScript typings (for intellisense / autocomplete) while using CommonJS imports with require() use the following approach:

```typescript
const FileNameExpert = require("file-name-expert").default;
// FileNameExpert.<method> will now provide autocomplete and parameter typings

describe("gets filename", () => {
  it("gets filename from url", async () => {
    const url =
      "https://github.com/v2ray/v2ray-core/releases/download/v4.22.1/v2ray-windows-64.zip";

    expect(FileNameExpert.getFileNameFromUrl(url)).toEqual(
      "v2ray-windows-64.zip"
    );
  });
});
```

## Credits

> This project was bootstrapped with [TSDX](https://github.com/jaredpalmer/tsdx).

## Local Development

### Install dependencies

```bash
pnpm i
# or
npm i
# or
yarn install
```

Below is a list of commands you will probably find useful.

### `npm start` or `yarn start`

Runs the project in development/watch mode. Your project will be rebuilt upon changes. TSDX has a special logger for you convenience. Error messages are pretty printed and formatted for compatibility VS Code's Problems tab.

<img src="https://user-images.githubusercontent.com/4060187/52168303-574d3a00-26f6-11e9-9f3b-71dbec9ebfcb.gif" width="600" />

Your library will be rebuilt if you make edits.

### `npm run build` or `yarn build`

Bundles the package to the `dist` folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).

<img src="https://user-images.githubusercontent.com/4060187/52168322-a98e5b00-26f6-11e9-8cf6-222d716b75ef.gif" width="600" />

### `npm test` or `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.
