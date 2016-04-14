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
    ],
    'no-extra-parens': [2, 'functions'],
    'no-shadow-restricted-names': 2,
    'no-array-constructor': 2,
    // treat var statements as if they were block scoped
    'block-scoped-var': 2,
    // require return statements to either always or never specify values
    'consistent-return': 2,
    // require default case in switch statements
    'default-case': 2,
    // encourages use of dot notation whenever possible
    'dot-notation': [2, {allowKeywords: true}],
    // enforces consistent newlines before or after dots
    'dot-location': [2, 'property'],
    // require the use of === and !==
    eqeqeq: 2,
    // make sure for-in loops have an if statement
    'guard-for-in': 2,
    // disallow the use of alert, confirm, and prompt
    'no-alert': 2,
    // disallow use of arguments.caller or arguments.callee
    'no-caller': 2,
    // disallow division operators explicitly at beginning of regular expression
    'no-div-regex': 2,
    // disallow else after a return in an if
    'no-else-return': 2,
    // disallow use of eval()
    'no-eval': 2,
    // disallow adding to native types
    'no-extend-native': 2,
    // disallow unnecessary function binding
    'no-extra-bind': 2,
    // disallow fallthrough of case statements
    'no-fallthrough': 2,
    // disallow the use of leading or trailing decimal points in numeric literals
    'no-floating-decimal': 2,
    // disallow the type conversions with shorter notations
    'no-implicit-coercion': [2, {
      boolean: true,
      number: true,
      string: true,
      allow: ['!!']
    }],
    // disallow use of eval()-like methods
    'no-implied-eval': 2,
    // disallow this keywords outside of classes or class-like objects
    // 'no-invalid-this': 2,
    // disallow usage of __iterator__ property
    'no-iterator': 2,
    // disallow use of labeled statements
    'no-labels': 2,
    // disallow unnecessary nested blocks
    'no-lone-blocks': 2,
    // disallow creation of functions within loops
    'no-loop-func': 2,
    // disallow use of multiple spaces
    'no-multi-spaces': 2,
    // disallow use of multiline strings
    'no-multi-str': 2,
    // disallow reassignments of native objects
    'no-native-reassign': 2,
    // disallow use of new operator when not part of the assignment or comparison
    'no-new': 2,
    // disallow use of new operator for Function object
    'no-new-func': 2,
    // disallows creating new instances of String,Number, and Boolean
    'no-new-wrappers': 2,
    // disallow use of (old style) octal literals
    'no-octal': 2,
    // disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    'no-octal-escape': 2,
    // disallow reassignment of function parameters
    // disallow parameter object manipulation
    // rule: http://eslint.org/docs/rules/no-param-reassign.html
    // 'no-param-reassign': [2, {props: false}],
    // disallow usage of __proto__ property
    'no-proto': 2,
    // disallow use of `javascript:` urls.
    'no-script-url': 2,
    // restrict what can be thrown as an exception
    'no-throw-literal': 2,
    // disallow unnecessary .call() and .apply()
    'no-useless-call': 2,
    // disallow use of void operator
    'no-void': 2,
    // disallow use of the with statement
    'no-with': 2,
    // requires to declare all vars on top of their containing scope
    'vars-on-top': 2,
    // require immediate function invocation to be wrapped in parentheses
    'wrap-iife': [2, 'inside'],
    // require or disallow Yoda conditions
    yoda: 2
  }
};
