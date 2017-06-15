module.exports = {
  rules: {
    'comma-dangle': [
      'error',
      'never'
    ],
    'no-cond-assign': [
      'error',
      'always'
    ],
    'no-constant-condition': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': [
      'error',
      'both'
    ],
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-negated-in-lhs': 'error',
    'no-obj-calls': 'error',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',
    curly: [
      'error',
      'all'
    ],
    'no-case-declarations': 'error',
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-redeclare': [
      'error',
      {
        builtinGlobals: true
      }
    ],
    'no-return-assign': [
      'error',
      'except-parens'
    ],
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-unused-labels': 'error',
    radix: [
      'error',
      'always'
    ],
    'no-delete-var': 'error',
    'no-undef': 'error',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used'
      }
    ],
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true
      }
    ],
    'array-bracket-spacing': [
      'error',
      'never'
    ],
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: false
      }
    ],
    camelcase: [
      'error',
      {
        properties: 'always'
      }
    ],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'comma-style': [
      'error',
      'last'
    ],
    'computed-property-spacing': [
      'error',
      'never'
    ],
    'eol-last': 'error',
    indent: [
      'error',
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
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict'
      }
    ],
    'keyword-spacing': 'error',
    'linebreak-style': [
      'error',
      'unix'
    ],
    'new-cap': [
      'error',
      {
        properties: false
      }
    ],
    'new-parens': 'error',
    'no-bitwise': 'error',
    'no-lonely-if': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxEOF: 1,
        maxBOF: 0
      }
    ],
    'no-new-object': 'error',
    'no-spaced-func': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': [
      'error',
      'never'
    ],
    'operator-linebreak': [
      'error',
      'before'
    ],
    'quote-props': [
      'error',
      'as-needed'
    ],
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'always'
    ],
    'semi-spacing': 'error',
    'space-before-blocks': [
      'error',
      'always'
    ],
    'space-before-function-paren': [
      'error',
      'never'
    ],
    'space-in-parens': [
      'error',
      'never'
    ],
    'space-infix-ops': 'error',
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false
      }
    ],
    'no-extra-parens': ['error', 'functions'],
    'no-shadow-restricted-names': 'error',
    'no-array-constructor': 'error',
    // treat var statements as if they were block scoped
    'block-scoped-var': 'error',
    // require return statements to either always or never specify values
    'consistent-return': 'error',
    // require default case in switch statements
    'default-case': 'error',
    // encourages use of dot notation whenever possible
    'dot-notation': ['error', {allowKeywords: true}],
    // enforces consistent newlines before or after dots
    'dot-location': ['error', 'property'],
    // require the use of === and !==
    eqeqeq: 'error',
    // make sure for-in loops have an if statement
    'guard-for-in': 'error',
    // disallow the use of alert, confirm, and prompt
    'no-alert': 'error',
    // disallow use of arguments.caller or arguments.callee
    'no-caller': 'error',
    // disallow division operators explicitly at beginning of regular expression
    'no-div-regex': 'error',
    // disallow else after a return in an if
    'no-else-return': 'error',
    // disallow use of eval()
    'no-eval': 'error',
    // disallow adding to native types
    'no-extend-native': 'error',
    // disallow unnecessary function binding
    'no-extra-bind': 'error',
    // disallow fallthrough of case statements
    'no-fallthrough': 'error',
    // disallow the use of leading or trailing decimal points in numeric literals
    'no-floating-decimal': 'error',
    // disallow the type conversions with shorter notations
    'no-implicit-coercion': ['error', {
      boolean: true,
      number: true,
      string: true,
      allow: ['!!']
    }],
    // disallow use of eval()-like methods
    'no-implied-eval': 'error',
    // disallow this keywords outside of classes or class-like objects
    // 'no-invalid-this': 'error',
    // disallow usage of __iterator__ property
    'no-iterator': 'error',
    // disallow use of labeled statements
    'no-labels': 'error',
    // disallow unnecessary nested blocks
    'no-lone-blocks': 'error',
    // disallow creation of functions within loops
    'no-loop-func': 'error',
    // disallow use of multiple spaces
    'no-multi-spaces': 'error',
    // disallow use of multiline strings
    'no-multi-str': 'error',
    // disallow reassignments of native objects
    'no-native-reassign': 'error',
    // disallow use of new operator when not part of the assignment or comparison
    'no-new': 'error',
    // disallow use of new operator for Function object
    'no-new-func': 'error',
    // disallows creating new instances of String,Number, and Boolean
    'no-new-wrappers': 'error',
    // disallow use of (old style) octal literals
    'no-octal': 'error',
    // disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \'error'51';
    'no-octal-escape': 'error',
    // disallow reassignment of function parameters
    // disallow parameter object manipulation
    // rule: http://eslint.org/docs/rules/no-param-reassign.html
    // 'no-param-reassign': ['error', {props: false}],
    // disallow usage of __proto__ property
    'no-proto': 'error',
    // disallow use of `javascript:` urls.
    'no-script-url': 'error',
    // restrict what can be thrown as an exception
    'no-throw-literal': 'error',
    // disallow unnecessary .call() and .apply()
    'no-useless-call': 'error',
    // disallow use of void operator
    'no-void': 'error',
    // disallow use of the with statement
    'no-with': 'error',
    // requires to declare all vars on top of their containing scope
    'vars-on-top': 'error',
    // require immediate function invocation to be wrapped in parentheses
    'wrap-iife': ['error', 'inside'],
    // require or disallow Yoda conditions
    yoda: 'error'
  }
};
