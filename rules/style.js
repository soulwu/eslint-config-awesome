module.exports = {
  'rules': {
    // enforce spacing inside array brackets
    'array-bracket-spacing': [2, 'never'],
    // enforce one true brace style
    'brace-style': [2, '1tbs', {allowSingleLine: false}],
    // require camel case names
    'camelcase': [2, {'properties': 'always'}],
    // enforce spacing before and after comma
    'comma-spacing': [2, {'before': false, 'after': true}],
    // enforce one true comma style
    'comma-style': [2, 'last'],
    // disallow padding inside computed properties
    'computed-property-spacing': [2, 'never'],
    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': 2,
    // this option sets a specific tab width for your code
    // https://github.com/eslint/eslint/blob/master/docs/rules/indent.md
    'indent': [2, 2, { "SwitchCase": 1, "VariableDeclarator": {var: 2, let: 2, const: 3} }],
    //enforce spacing before and after keywords
    'keyword-spacing': 2,
    // enforces spacing between keys and values in object literal properties
    'key-spacing': [2, {'beforeColon': false, 'afterColon': true}],
    // disallow mixed 'LF' and 'CRLF' as linebreaks
    'linebreak-style': [2, 'unix'],
    // require a capital letter for constructors
    //'new-cap': [2, {'newIsCap': true}],
    // disallow the omission of parentheses when invoking a constructor with no arguments
    'new-parens': 2,
    //disallow use of bitwise operators
    'no-bitwise': 2,
    // disallow if as the only statement in an else block
    'no-lonely-if': 2,
    // disallow multiple empty lines and only one newline at the end
    'no-multiple-empty-lines': [2, {'max': 2, 'maxEOF': 1, maxBOF: 0}],
    // disallow use of the Object constructor
    'no-new-object': 2,
    // disallow space between function identifier and application
    'no-spaced-func': 2,
    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 2,
    // disallow dangling underscores in identifiers
    'no-underscore-dangle': [2, {allowAfterThis: true}],
    // disallow the use of Boolean literals in conditional expressions
    'no-unneeded-ternary': 2,
    //disallow whitespace before properties
    'no-whitespace-before-property': 2,
    // require padding inside curly braces
    'object-curly-spacing': [2, 'never'],
    // enforce operators to be placed before or after line breaks
    'operator-linebreak': 2,
    // require quotes around object literal property names
    // http://eslint.org/docs/rules/quote-props.html
    'quote-props': [2, 'as-needed'],
    // specify whether double or single quotes should be used
    'quotes': [2, 'single'],
    // enforce spacing before and after semicolons
    'semi-spacing': [2],
    // require or disallow use of semicolons instead of ASI
    'semi': [2, 'always'],
    // require or disallow space before blocks
    'space-before-blocks': [2, 'always'],
    // require or disallow space before function opening parenthesis
    // https://github.com/eslint/eslint/blob/master/docs/rules/space-before-function-paren.md
    'space-before-function-paren': [2, 'never'],
    // require or disallow spaces inside parentheses
    'space-in-parens': [2, 'never'],
    // require spaces around operators
    'space-infix-ops': 2,
    // Require or disallow spaces before/after unary operators
    'space-unary-ops': [2, {words: true, nonwords: false}]
  }
};
