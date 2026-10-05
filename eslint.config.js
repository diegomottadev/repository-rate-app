const { defineConfig } = require('eslint/config')
const expoConfig = require('eslint-config-expo/flat')
const prettierConfig = require('eslint-config-prettier')
const globals = require('globals')

module.exports = defineConfig([
    expoConfig,
    prettierConfig,
    { ignores: ['dist/*', 'coverage/*'] },
    {
        files: ['**/*.test.{js,jsx}'],
        languageOptions: { globals: globals.jest }
    },
    {
        // React 19 no longer checks propTypes at runtime, so the linter does it.
        rules: { 'react/prop-types': 'error' }
    }
])
