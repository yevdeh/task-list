module.exports = {
	'env': {
			'browser': true,
			'commonjs': true,
			'es6': true,
			'jquery': true,
			'node': true
	},
	'extends': [
			'eslint:recommended',
			'plugin:react/recommended'
	],
	'parserOptions': {
			'ecmaFeatures': {
					'experimentalObjectRestSpread': true,
					'jsx': true
			},
			'sourceType': 'module'
	},
	'plugins': [
			'react'
	],
	'rules': {
			// http://eslint.org/docs/rules/#possible-errors
			'no-await-in-loop': 2,
			'no-compare-neg-zero': 2,
			'no-extra-parens': [2, 'all', { 'nestedBinaryExpressions': false, 'ignoreJSX': 'all' }],
			'no-prototype-builtins': 0,
			'no-template-curly-in-string': 2,
			'valid-jsdoc': 2,

			// http://eslint.org/docs/rules/#best-practices
			'accessor-pairs': 2,
			'array-callback-return': 2,
			'block-scoped-var': 2,
			'class-methods-use-this': 0,
			'complexity': 0,
			'consistent-return': 0,
			'curly': 2,
			'default-case': 2,
			'dot-location': [2, 'property'],
			'dot-notation': 2,
			'eqeqeq': 2,
			'guard-for-in': 2,
			'no-alert': 2,
			'no-caller': 2,
			'no-div-regex': 2,
			'no-else-return': 2,
			'no-empty-function': 2,
			'no-eq-null': 2,
			'no-eval': 2,
			'no-extend-native': 2,
			'no-extra-bind': 2,
			'no-extra-label': 2,
			'no-floating-decimal': 2,
			'no-implicit-coercion': 2,
			'no-implicit-globals': 2,
			'no-implied-eval': 2,
			'no-invalid-this': 0,
			'no-iterator': 2,
			'no-labels': 2,
			'no-lone-blocks': 2,
			'no-loop-func': 2,
			'no-magic-numbers': [2, { 'ignore': [-1, 0, 1] }],
			'no-multi-spaces': 2,
			'no-multi-str': 2,
			'no-new': 0,
			'no-new-func': 2,
			'no-new-wrappers': 2,
			'no-octal-escape': 2,
			'no-param-reassign': 2,
			'no-proto': 2,
			'no-restricted-properties': 0,
			'no-return-assign': 2,
			'no-return-await': 2,
			'no-script-url': 2,
			'no-self-compare': 2,
			'no-sequences': 2,
			'no-throw-literal': 2,
			'no-unmodified-loop-condition': 2,
			'no-unused-expressions': 2,
			'no-useless-call': 2,
			'no-useless-concat': 2,
			'no-useless-escape': 2,
			'no-useless-return': 2,
			'no-void': 2,
			'no-warning-comments': 2,
			'no-with': 2,
			'prefer-promise-reject-errors': 2,
			'radix': 0,
			'require-await': 2,
			'vars-on-top': 2,
			'wrap-iife': 2,
			'yoda': 2,

			// http://eslint.org/docs/rules/#strict-mode

			// http://eslint.org/docs/rules/#variables
			'init-declarations': 2,
			'no-catch-shadow': 2,
			'no-label-var': 2,
			'no-restricted-globals': 0,
			'no-shadow': 2,
			'no-shadow-restricted-names': 2,
			'no-undef-init': 2,
			'no-undefined': 2,
			'no-use-before-define': 2,

			// http://eslint.org/docs/rules/#nodejs-and-commonjs

			// http://eslint.org/docs/rules/#stylistic-issues
			'array-bracket-spacing': 2,
			'block-spacing': 2,
			'brace-style': 2,
			'camelcase': 2,
			'capitalized-comments': 0,
			'comma-dangle': 2,
			'comma-spacing': 2,
			'comma-style': 2,
			'computed-property-spacing': 2,
			'consistent-this': 2,
			'eol-last': 2,
			'func-call-spacing': 2,
			'func-name-matching': 2,
			'func-names': 0,
			'func-style': 0,
			'id-blacklist': 0,
			'id-length': 0,
			'id-match': 0,
			'indent': [2, 'tab', {
				'SwitchCase': 1
			}],
			'jsx-quotes': 2,
			'key-spacing': 2,
			'keyword-spacing': 2,
			'line-comment-position': 2,
			'linebreak-style': 2,
			'lines-around-comment': 2,
			'lines-around-directive': 2,
			'max-depth': 2,
			'max-len': [2, { 'code': 120, 'ignoreTemplateLiterals': true }],
			'max-lines': 2,
			'max-nested-callbacks': 2,
			'max-params': 2,
			'max-statements': 0,
			'max-statements-per-line': [2, { 'max': 2 }],
			'multiline-ternary': 0,
			'new-cap': 2,
			'new-parens': 2,
			'newline-after-var': 0,
			'newline-before-return': 2,
			'newline-per-chained-call': [2, { 'ignoreChainWithDepth': 3 }],
			'no-array-constructor': 2,
			'no-bitwise': 2,
			'no-continue': 2,
			'no-inline-comments': 2,
			'no-lonely-if': 2,
			'no-mixed-operators': 2,
			'no-multi-assign': 2,
			'no-multiple-empty-lines': 2,
			'no-negated-condition': 2,
			'no-nested-ternary': 2,
			'no-new-object': 2,
			'no-plusplus': 0,
			'no-restricted-syntax': 0,
			'no-tabs': 0,
			'no-ternary': 0,
			'no-trailing-spaces': 2,
			'no-underscore-dangle': 0,
			'no-unneeded-ternary': 2,
			'no-whitespace-before-property': 2,
			'nonblock-statement-body-position': 2,
			'object-curly-newline': 0,
			'object-curly-spacing': 2,
			'object-property-newline': 2,
			'one-var': 0,
			'one-var-declaration-per-line': [2, 'initializations'],
			'operator-assignment': 2,
			'operator-linebreak': 2,
			'padded-blocks': [2, 'never'],
			'quote-props': [2, 'consistent-as-needed'],
			'quotes': [2, 'single'],
			'require-jsdoc': 0,
			'semi': [2, 'never'],
			'semi-spacing': 2,
			'sort-keys': 0,
			'sort-vars': 0,
			'space-before-blocks': 2,
			'space-before-function-paren': 2,
			'space-in-parens': 2,
			'space-infix-ops': 2,
			'space-unary-ops': 2,
			'spaced-comment': 2,
			'template-tag-spacing': 2,
			'unicode-bom': 2,
			'wrap-regex': 0,

			// http://eslint.org/docs/rules/#ecmascript-6
			'arrow-body-style': 2,
			'arrow-parens': [2, 'as-needed'],
			'arrow-spacing': 2,
			'generator-star-spacing': 2,
			'no-confusing-arrow': 0,
			'no-duplicate-imports': 2,
			'no-restricted-imports': 0,
			'no-useless-computed-key': 2,
			'no-useless-constructor': 2,
			'no-useless-rename': 2,
			'no-var': 2,
			'object-shorthand': 2,
			'prefer-arrow-callback': 0,
			'prefer-const': 2,
			'prefer-destructuring': 0,
			'prefer-numeric-literals': 2,
			'prefer-rest-params': 2,
			'prefer-spread': 2,
			'prefer-template': 2,
			'rest-spread-spacing': 2,
			'sort-imports': 0,
			'symbol-description': 2,
			'template-curly-spacing': 2,
			'yield-star-spacing': 2,

			// react
			'react/forbid-component-props': 0,
			'react/forbid-elements': 0,
			'react/forbid-foreign-prop-types': 0,
			'react/forbid-prop-types': 2,
			'react/jsx-boolean-value': 2,
			'react/jsx-closing-bracket-location': 2,
			'react/jsx-curly-spacing': 2,
			'react/jsx-equals-spacing': 2,
			'react/jsx-filename-extension': 0,
			'react/jsx-first-prop-new-line': 2,
			'react/jsx-handler-names': 0,
			'react/jsx-indent-props': [2, 'tab'],
			'react/jsx-indent': [2, 'tab'],
			'react/jsx-key': 2,
			'react/jsx-max-props-per-line': 2,
			'react/jsx-no-bind': 0,
			'react/jsx-no-comment-textnodes': 2,
			'react/jsx-no-literals': 0,
			'react/jsx-no-target-blank': 0,
			'react/jsx-pascal-case': 2,
			'react/jsx-sort-props': 2,
			'react/jsx-tag-spacing': 2,
			'react/jsx-wrap-multilines': 2,
			'react/no-array-index-key': 2,
			'react/no-children-prop': 2,
			'react/no-danger-with-children': 0,
			'react/no-danger': 2,
			'react/no-did-mount-set-state': 2,
			'react/no-did-update-set-state': 2,
			'react/no-multi-comp': 2,
			'react/no-set-state': 2,
			'react/no-string-refs': 2,
			'react/no-unescaped-entities': 2,
			'react/no-unused-prop-types': 2,
			'react/prefer-es6-class': 2,
			'react/prefer-stateless-function': 2,
			'react/prop-types': 0,
			'react/require-default-props': 2,
			'react/require-optimization': 2,
			'react/self-closing-comp': 2,
			'react/sort-comp': 2,
			'react/sort-prop-types': 0,
			'react/style-prop-object': 0,
			'react/void-dom-elements-no-children': 2
	}
};
