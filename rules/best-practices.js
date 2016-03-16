module.exports = {
  'rules': {
    // treat var statements as if they were block scoped
    'block-scoped-var': 2,
    // require return statements to either always or never specify values
    'consistent-return': 2,
    // specify curly brace conventions for all control statements
    'curly': [2, 'all'],
    // require default case in switch statements
    'default-case': 2,
    // encourages use of dot notation whenever possible
    'dot-notation': [2, { 'allowKeywords': true}],
    // enforces consistent newlines before or after dots
    'dot-location': [2,'property'],
    // require the use of === and !==
    'eqeqeq': 2,
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
    // disallow use of labels for anything other then loops and switches
    'no-labels': 2,
    // disallow comparisons to null without a type-checking operator
    'no-eq-null': 2,
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
    'no-implicit-coercion':  [2, {
        "boolean": true,
        "number": true,
        "string": true,
        "allow": ["!!"]
    }],
    // disallow use of eval()-like methods
    'no-implied-eval': 2,
    // disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 2,
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
    'no-param-reassign': [2, { 'props': true }],
    // disallow usage of __proto__ property
    'no-proto': 2,
    // disallow declaring the same variable more then once
    'no-redeclare': 2,
    // disallow use of assignment in return statement
    'no-return-assign': 2,
    // disallow use of `javascript:` urls.
    'no-script-url': 2,
    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 2,
    // disallow use of comma operator
    'no-sequences': 2,
    // restrict what can be thrown as an exception
    'no-throw-literal': 2,
    // disallow usage of expressions in statement position
    'no-unused-expressions': 2,
    // disallow unnecessary .call() and .apply()
    'no-useless-call': 0,
    // disallow use of void operator
    'no-void': 2,
    // disallow use of the with statement
    'no-with': 2,
    // require use of the second argument for parseInt()
    'radix': 2,
    // requires to declare all vars on top of their containing scope
    'vars-on-top': 2,
    // require immediate function invocation to be wrapped in parentheses
    'wrap-iife': [2, "inside"],
    // require or disallow Yoda conditions
    'yoda': 2,
    // 不允许在case中做定义语句
    'no-case-declarations': 2,
    'no-empty-pattern': 2,
    'no-self-assign': 2,
    'no-delete-var': 2,
    'no-undef': 2,
    'no-unused-vars': 2,
    'no-use-before-define': 2,
    'no-dupe-class-members': 2,
    'no-new-symbol': 2,
    'no-useless-constructor': 2,
    'prefer-rest-params': 2,
    'prefer-template': 2,
    'template-curly-spacing': [2, 'never'],
    'yield-star-spacing': [2,'before']
  }
};
