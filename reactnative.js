module.exports = {
  extends: [
    __dirname + '/react.js'
  ],
  globals: {
    __DEV__: true
  },
  rules: {
    'react/prop-types': [
      'warn',
      {
        ignore: [
          'children',
          'dispatch',
          /* withNativeModule */
          'callNative',
          'addNativeEvent',
          'clearNativeEvent',
          'clearAllNativeEvent',
          /* end:withNativeModule */
          /* withUIComponent */
          'showUI',
          /* end:withUIComponent */
          /* react-native-navigation */
          'navigator'
          /* end:react-native-navigation */
        ]
      }
    ]
  }
};
