module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/strongly-recommended',
    '@vue/standard'
  ],
  rules: {
    'indent': 'off',
    'comma-spacing': 'off',
    'quotes': 'off',
    'no-trailing-spaces': 'off',
    'space-before-blocks': 'off',
    'space-before-function-paren': 'off',
    'no-console': 'off',
    'object-curly-spacing': 'off',
    'no-debugger': 'off',
    'comma-dangle': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-unused-components': 'off',
    'vue/comma-dangle': 'off',
    'vue/mustache-interpolation-spacing': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'vue/html-indent': 'warning',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',

  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
