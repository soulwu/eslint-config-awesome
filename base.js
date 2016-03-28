module.exports = {
  rules: {
    'comma-dangle': [
      2,
      'never'
    ],
    'no-cond-assign': [
      2,
      'always'
    ],
    'no-constant-condition': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-inner-declarations': [
      2,
      'both'
    ],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-negated-in-lhs': 2,
    'no-obj-calls': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'use-isnan': 2,
    'valid-typeof': 2,
    curly: [
      2,
      'all'
    ],
    'no-case-declarations': 2,
    'no-empty-pattern': 2,
    'no-eq-null': 2,
    'no-redeclare': [
      2,
      {
        builtinGlobals: true
      }
    ],
    'no-return-assign': [
      2,
      'except-parens'
    ],
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-unused-expressions': 2,
    'no-unused-labels': 2,
    radix: [
      2,
      'always'
    ],
    'no-delete-var': 2,
    'no-undef': 2,
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'after-used'
      }
    ],
    'no-use-before-define': [
      2,
      {
        functions: false,
        classes: true
      }
    ],
    'array-bracket-spacing': [
      2,
      'never'
    ],
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: false
      }
    ],
    camelcase: [
      2,
      {
        properties: 'always'
      }
    ],
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    'comma-style': [
      2,
      'last'
    ],
    'computed-property-spacing': [
      2,
      'never'
    ],
    'eol-last': 2,
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: {
          var: 2,
          let: 2,
          const: 3
        }
      }
    ],
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict'
      }
    ],
    'keyword-spacing': 2,
    'linebreak-style': [
      2,
      'unix'
    ],
    'new-cap': [
      2,
      {
        properties: false
      }
    ],
    'new-parens': 2,
    'no-bitwise': 2,
    'no-lonely-if': 2,
    'no-multiple-empty-lines': [
      2,
      {
        max: 2,
        maxEOF: 1,
        maxBOF: 0
      }
    ],
    'no-new-object': 2,
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'no-underscore-dangle': [
      2,
      {
        allowAfterThis: true
      }
    ],
    'no-unneeded-ternary': 2,
    'no-whitespace-before-property': 2,
    'object-curly-spacing': [
      2,
      'never'
    ],
    'operator-linebreak': [
      2,
      'before'
    ],
    'quote-props': [
      2,
      'as-needed'
    ],
    quotes: [
      2,
      'single'
    ],
    semi: [
      2,
      'always'
    ],
    'semi-spacing': 2,
    'space-before-blocks': [
      2,
      'always'
    ],
    'space-before-function-paren': [
      2,
      'never'
    ],
    'space-in-parens': [
      2,
      'never'
    ],
    'space-infix-ops': 2,
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false
      }
    ]
  }
};
