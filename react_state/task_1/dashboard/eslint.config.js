import globals from 'globals';
import babelParser from '@babel/eslint-parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';

export default [
  {
    ignores: ['dist/**'], // Ignore the dist folder
    files: ['**/*.js', '**/*.jsx'], // Apply this configuration to JS and JSX files
    languageOptions: {
      parser: babelParser, // Use Babel parser
      parserOptions: {
        ecmaVersion: 2020, // ECMAScript 2020 syntax
        sourceType: 'module', // Use ECMAScript modules
        requireConfigFile: false, // Prevents errors if Babel config is not explicitly defined
        babelOptions: {
          presets: ['@babel/preset-react'], // Add React preset
        },
      },
      globals: {
        ...globals.browser, // Add browser global variables
        jest: 'readonly', // Add Jest global variables for tests
      },
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefreshPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/react-in-jsx-scope': 'off', // Disable the outdated rule
    },
  },
];
