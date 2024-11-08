// @ts-check
import typescriptEslint from '@typescript-eslint/eslint-plugin';

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      'no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      'react/prop-types': 'off',
      'react/jsx-props-no-spreading': 'off',
      '@typescript-eslint/camelcase': 'off',
      'no-underscore-dangle': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'react/no-unescaped-entities': 'off',
      'react/no-array-index-key': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'no-restricted-imports': [
        'error',
        {
          patterns: ['../*'],
        },
      ],
      'no-await-in-loop': 'off',
      'no-plusplus': 'off',
      'class-methods-use-this': 'off',
      'no-param-reassign': 'off',
      'eol-last': ['error', 'always'],
      'react/require-default-props': 'off',
      'react/destructuring-assignment': 0,
      'no-restricted-syntax': [
        'error',
        {
          selector: 'ForInStatement',
          message:
            'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
        },
        {
          selector: 'LabeledStatement',
          message:
            'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        },
        {
          selector: 'WithStatement',
          message:
            '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        },
      ],
      'no-console': 'warn',
      quotes: ['error', 'single'],
      semi: ['warn', 'always'],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'interface',
          format: ['PascalCase'],
          custom: {
            regex: '^[A-Z]',
            match: true,
          },
        },
      ],
    },
  },
);
