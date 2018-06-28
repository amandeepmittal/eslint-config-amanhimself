# eslint-config-amanhimself

[![Travis](https://img.shields.io/travis/amandeepmittal/eslint-config-amanhimself.svg)](https://github.com/amandeepmittal/eslint-config-amanhimself)
[![npm](https://img.shields.io/npm/dt/eslint-config-amanhimself.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-amanhimself)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/amandeepmittal/eslint-config-amanhimself)
![code style expo](https://img.shields.io/badge/code%20style-expo-blue.svg)
![code style react-native](https://img.shields.io/badge/code%20style-react%20native-ff69b4.svg)
[![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/amanhimself)

Shared ESLint configs React Native, and Expo projects. ⚛️ + 📱

## Installation

- with npm

```shell
npm install --dev eslint-config-amanhimself eslint
```

- with yarn

```shell
yarn add --dev eslint-config-amanhimself eslint
```

## Usage

Since ESLint checks both `package.json` and `.eslintrc.*` files for its configuration, you can add it to your own configuration either in `package.json`

```json
{
	"eslintConfig": {
		"extends": "eslint-config-amanhimself"
	}
}
```

**Or** in .eslintrc.js

```js
module.exports = {
	extends: 'eslint-config-amanhimself'
};
```

## Support for Different Platforms

Currently, this configuration is suitable for React Native and Expo projects.

## Philosophy

This motivation behind this package is to provide a universal configuration that can be applied without needing to tweak for most projects for consistency in solving problems such as syntax errors and style issues. This will also let teams/individuals to use a more lenient configuration and concentrate more on building features in their application rather than keeping their linter happy. 😅
