module.exports = {
	plugins: ['react'],
	// View link below for react rules documentation
	// https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
	rules: {
		// Specify whether double or single quotes should be used in JSX attributes
		// http://eslint.org/docs/rules/jsx-quotes
		// 'jsx-quotes': ['error', 'single', { avoidEscape: true }],

		// 'class-methods-use-this': ['error', {
		//   exceptMethods: [
		//     'render',
		//     'getInitialState',
		//     'getDefaultProps',
		//     'getChildContext',
		//     'componentWillMount',
		//     'componentDidMount',
		//     'componentWillReceiveProps',
		//     'shouldComponentUpdate',
		//     'componentWillUpdate',
		//     'componentDidUpdate',
		//     'componentWillUnmount',
		//   ],
		// }],

		// Prevent missing displayName in a React component definition
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
		'react/display-name': ['off', { ignoreTranspilerName: false }],

		// Forbid certain propTypes (any, array, object)
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
		'react/forbid-prop-types': ['warn', { forbid: ['any'] }],

		// Enforce boolean attributes notation in JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
		'react/jsx-boolean-value': ['warn', 'never'],

		// Validate closing bracket location in JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
		'react/jsx-closing-bracket-location': ['error', 'line-aligned'],

		// Enforce or disallow spaces inside of curly braces in JSX attributes
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
		'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],

		// Enforce event handler naming conventions in JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
		'react/jsx-handler-names': [
			'off',
			{
				eventHandlerPrefix: 'handle',
				eventHandlerPropPrefix: 'on'
			}
		],

		// Validate props indentation in JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
		'react/jsx-indent-props': ['warn', 2],

		// Validate JSX has key prop when in array or iterator
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
		'react/jsx-key': 'off',

		// Limit maximum of props on a single line in JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
		'react/jsx-max-props-per-line': ['off', { maximum: 1, when: 'multiline' }],

		// Prevent usage of .bind() in JSX props
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
		'react/jsx-no-bind': [
			'error',
			{
				ignoreRefs: false,
				allowArrowFunctions: true,
				allowBind: false
			}
		],

		// Prevent duplicate props in JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
		'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],

		// Prevent usage of unwrapped JSX strings
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
		'react/jsx-no-literals': 'off',

		// Disallow undeclared variables in JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
		'react/jsx-no-undef': 'error',

		// Enforce PascalCase for user-defined JSX components
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
		'react/jsx-pascal-case': [
			'error',
			{
				allowAllCaps: true,
				ignore: []
			}
		],

		// Enforce propTypes declarations alphabetical sorting
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
		'react/sort-prop-types': [
			0,
			{
				ignoreCase: false,
				callbacksLast: false,
				requiredFirst: false
			}
		],

		// Deprecated in favor of react/jsx-sort-props
		'react/jsx-sort-prop-types': 'off',

		// Enforce props alphabetical sorting
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
		'react/jsx-sort-props': [
			'off',
			{
				ignoreCase: true,
				callbacksLast: false,
				shorthandFirst: false,
				shorthandLast: false,
				noSortAlphabetically: false,
				reservedFirst: true
			}
		],
		// Prevent React to be incorrectly marked as unused
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
		'react/jsx-uses-react': ['off'],

		// Prevent variables used in JSX to be incorrectly marked as unused
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
		'react/jsx-uses-vars': 'error',

		// Prevent usage of dangerous JSX properties
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
		'react/no-danger': 'warn',

		// Prevent usage of deprecated methods
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
		'react/no-deprecated': ['error'],

		// Prevent usage of setState in componentDidMount
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
		'react/no-did-mount-set-state': 'off',

		// Prevent usage of setState in componentDidUpdate
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
		'react/no-did-update-set-state': 'off',

		// Prevent direct mutation of this.state
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
		'react/no-direct-mutation-state': 'off',

		// Prevent usage of setState in componentWillUpdate
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
		// 'react/no-will-update-set-state': 'error',

		// Prevent usage of isMounted
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
		'react/no-is-mounted': 'off',

		// Prevent multiple component definition per file
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
		'react/no-multi-comp': ['error', { ignoreStateless: true }],

		// Prevent usage of setState
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
		'react/no-set-state': 'off',

		// Prevent using string references
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
		'react/no-string-refs': 'off',

		// Prevent usage of unknown DOM property
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
		'react/no-unknown-property': 'error',

		// Require ES6 class declarations over React.createClass
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
		'react/prefer-es6-class': 'off',

		// Require stateless functions when not using lifecycle methods, setState or ref
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
		'react/prefer-stateless-function': [
			'error',
			{ ignorePureComponents: true }
		],

		// Prevent missing React when using JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
		'react/react-in-jsx-scope': 'warn',

		// Restrict file extensions that may be required
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-extension.md
		// 'react/require-extension': [2, { 'extensions': ['.jsx', '.js'] }],

		// Require render() methods to return something
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
		'react/require-render-return': 'warn',

		// Prevent extra closing tags for components without children
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
		'react/self-closing-comp': 'warn',

		// Enforce spaces before the closing bracket of self-closing JSX elements
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
		'react/jsx-space-before-closing': ['error', 'always'],

		// Prevent missing parentheses around multilines JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
		'react/jsx-wrap-multilines': [
			'error',
			{
				declaration: true,
				assignment: true,
				return: true
			}
		],
		'react/jsx-space-before-closing': ['off', 'always'], // deprecated

		// Require that the first prop in a JSX element be on a new line when the element is multiline
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
		'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

		// Enforce spacing around jsx equals signs
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
		'react/jsx-equals-spacing': ['error', 'never'],

		// Enforce JSX indentation
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
		'react/jsx-indent': ['error', 2],

		// Disallow target="_blank" on links
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
		'react/jsx-no-target-blank': 'error',

		// prevent accidental JS comments from being injected into JSX as text
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
		'react/jsx-no-comment-textnodes': 'error',
		'react/no-comment-textnodes': 'off' // deprecated version
	},

	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.json']
			}
		},
		react: {
			pragma: 'React',
			version: '15.0'
		}
	}
};
