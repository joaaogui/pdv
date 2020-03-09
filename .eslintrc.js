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
    'indent': ['off', 2],
    'vue/require-default-prop': 'off',
    'no-unused-vars': 'warn',
    'no-new': 'off',
    'vue/mustache-interpolation-spacing': 'off',
    'vue/no-unused-components': 'warn',
    'no-multiple-empty-lines': 'warn',
    'vue/html-closing-bracket-spacing': 'off',
    'space-before-function-paren': 'off',
    'object-curly-spacing': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'quotes': 'warn',
    'vue/valid-v-for': 'warn',

  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
