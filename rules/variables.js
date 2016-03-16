module.exports = {
  'rules': {
    // disallow shadowing of names such as arguments
    'no-shadow-restricted-names': 2,
    // disallow declaration of variables already declared in the outer scope
    'no-shadow': 2,
    // disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undef': 2,
    // disallow declaration of variables that are not used in the code
    'no-unused-vars': [2, { 'vars': 'local', 'args': 'after-used' }],
    // disallow use of variables before they are defined
    'no-use-before-define': [2, {functions: false, classes: true}]
  }
};
