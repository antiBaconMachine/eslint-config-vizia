/* eslint no-warning-comments: 0, quote-props: 0 */

'use strict';

module.exports = {
    globals: {
        // well supported ES2015 globals
        Promise: true,
        Map: true,
        Set: true,
        WeakMap: true
    },
    rules: {
        // possible errors
        'no-cond-assign': 'error',
        'no-console': 'error',
        'no-constant-condition': 'error',
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty': 'error',
        'no-empty-character-class': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-parens': 'error',
        'no-extra-semi': 'error',
        'no-func-assign': 'error',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-negated-in-lhs': 'error',
        'no-obj-calls': 'error',
        'no-prototype-builtins': 'error',
        'no-regex-spaces': 'error',
        'no-sparse-arrays': 'error',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'use-isnan': 'error',
        'valid-jsdoc': 'off',
        'valid-typeof': 'error',

        // best practices
        'accessor-pairs': 'off',
        'array-callback-return': 'error',
        'block-scoped-var': 'off',
        'complexity': ['error', 10],
        'consistent-return': 'off',
        'curly': 'error',
        'default-case': 'error',
        'dot-location': ['error', 'property'],
        'dot-notation': 'error',
        'eqeqeq': 'error',
        'guard-for-in': 'error',
        'no-alert': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'off',
        'no-div-regex': 'off',
        'no-else-return': 'error',
        'no-empty-function': 'off',
        'no-empty-pattern': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'off',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-fallthrough': 'off',
        'no-floating-decimal': 'error',
        'no-implicit-coercion': 'off',
        'no-implicit-globals': 'off',
        'no-implied-eval': 'error',
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-labels': 'off',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-magic-numbers': 'off',
        'no-multi-spaces': ['error', {exceptions: {Property: true, VariableDeclarator: true, ImportDeclaration: true}}],
        'no-multi-str': 'off',
        'no-native-reassign': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': 'error',
        'no-proto': 'error',
        'no-redeclare': 'error',
        'no-return-assign': 'error',
        'no-script-url': 'error',
        'no-self-assign': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unused-expressions': 'error',
        'no-unused-labels': 'error',
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        'no-useless-escape': 'error',
        'no-void': 'error',
        'no-with': 'error',
        'radix': 'error',
        'vars-on-top': 'off',
        'wrap-iife': 'error',
        'yoda': 'error',

        // strict mode
        'strict': ['error', 'safe'],

        // variables
        'init-declarations': 'off',
        'no-catch-shadow': 'off',
        'no-delete-var': 'error',
        'no-label-var': 'error',
        'no-restricted-globals': 'off',
        'no-shadow': 'off',
        'no-shadow-restricted-names': 'off',
        'no-undef': 'error',
        'no-undef-init': 'off',
        'no-undefined': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': ['error', {"functions": false, "classes": true}],

        // Node.js and CommonJS
        'callback-return': 'off',
        'global-require': 'off',
        'handle-callback-err': 'error',
        'no-mixed-requires': 'error',
        'no-new-require': 'error',
        'no-path-concat': 'error',
        'no-process-env': 'off',
        'no-process-exit': 'off',
        'no-restricted-modules': 'off',
        'no-sync': 'error',

        // stylistic issues
        'array-bracket-spacing': 'error',
        'block-spacing': 'error',
        'brace-style': ['error', '1tbs'],
        'camelcase': ['error', {properties: 'never'}],
        'comma-dangle': ['error', 'never'],
        'comma-spacing': ['error', {before: false, after: true}],
        'comma-style': ['error', 'last'],
        'computed-property-spacing': ['error', 'never'],
        'consistent-this': 'off',
        'eol-last': 'error',
        'func-names': 'off',
        'func-style': ['error', 'declaration', {allowArrowFunctions: true}],
        'id-blacklist': 'off',
        'id-length': 'off',
        'id-match': 'off',
        'indent': ['error', 4],
        'jsx-quotes': 'off',
        'key-spacing': ['error', {beforeColon: false, afterColon: true}],
        'keyword-spacing': 'error',
        'linebreak-style': ['error', 'unix'],
        'lines-around-comment': 'off',
        'max-depth': ['error', 5],
        'max-len': ['error', 140, 4],
        'max-lines': ['error', 500],
        'max-nested-callbacks': 'off',
        'max-params': ['error', 4],
        'max-statements': ['error', 20],
        'max-statements-per-line': ['error', {max: 1}],
        'new-cap': 'error',
        'new-parens': 'error',
        'newline-after-var': 'off',
        'newline-before-return': 'off',
        'newline-per-chained-call': ['error', {ignoreChainWithDepth: 2}],
        'no-array-constructor': 'error',
        'no-bitwise': 'error',
        'no-continue': 'off',
        'no-inline-comments': 'off',
        'no-lonely-if': 'off',
        'no-mixed-operators': 'off',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multiple-empty-lines': 'error',
        'no-negated-condition': 'off',
        'no-nested-ternary': 'error',
        'no-new-object': 'error',
        'no-plusplus': 'off',
        'no-restricted-syntax': 'off',
        'no-spaced-func': 'error',
        'no-ternary': 'off',
        'no-trailing-spaces': 'error',
        'no-underscore-dangle': 'error',
        'no-unneeded-ternary': 'error',
        'no-whitespace-before-property': 'error',
        'object-curly-newline': 'off',
        'object-curly-spacing': ['error', 'never'],
        'object-property-newline': 'off',
        'one-var': ['error', 'never'],
        'one-var-declaration-per-line': ['error', 'always'],
        'operator-assignment': ['error', 'always'],
        'operator-linebreak': ['error', 'none'],
        'padded-blocks': ['error', 'never'],
        'quote-props': ['error', 'as-needed'],
        'quotes': ['error', 'single'],
        'require-jsdoc': 'off',
        'semi': 'error',
        'semi-spacing': ['error', {before: false, after: true}],
        'sort-vars': 'off',
        'space-before-blocks': 'error',
        'space-before-function-paren': ['error', {anonymous: 'always', named: 'never'}],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'space-unary-ops': ['error', {words: true, nonwords: false}],
        'spaced-comment': 'off',
        'unary-bom': 'off',
        'wrap-regex': 'off',

        // ES2015
        'arrow-body-style': 'off',
        'arrow-parens': 'off',
        'arrow-spacing': ['error', {before: true, after: true}],
        'constructor-super': 'error',
        'generator-star-spacing': ['error', {before: false, after: true}],
        'no-class-assign': 'error',
        'no-confusing-arrow': 'off',
        'no-const-assign': 'error',
        'no-dupe-class-members': 'error',
        'no-duplicate-imports': 'error',
        'no-new-symbol': 'error',
        'no-restricted-imports': 'off',
        'no-this-before-super': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',

        // warn on TODO comments
        'no-warning-comments': ['warn', {terms: ['todo'], location: 'anywhere'}]
    }
};
