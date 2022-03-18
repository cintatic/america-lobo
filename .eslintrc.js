module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  overrides: [
    {
      files: ['pages/**/*.vue', 'layouts/*.vue', 'components/*.vue'],
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },
  ],
  // add your custom rules here
  rules: {},
}
