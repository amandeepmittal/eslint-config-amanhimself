# eslint-config-amanhimself

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
