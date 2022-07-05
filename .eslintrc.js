module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  globals: {
    Message: true,
    env: true,
    useRoute: true,
    useRouter: true,
    useStore: true,
  },
  /* Specifies how the syntax is parsed . Can be null , But if it is not empty , Only this value can be assigned , The reasons are as follows .*/
  parser: 'vue-eslint-parser',
  /* Lower in priority parse Syntax parsing configuration */
  parserOptions: {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'vue-global-api',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['vue'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 1 : 0,
    'no-useless-concat': 1, // No unnecessary string literal or template literal joins are allowed
    'no-useless-escape': 0, // Unnecessary escape characters are prohibited
    'consistent-return': 0, // requirement return Statement either always specifies the value to return , Or not
    camelcase: 0, // Enforce camel spelling naming conventions
    'no-redeclare': 1, // It is forbidden to declare the same variable more than once
    'array-callback-return': 1, // The callback function of the mandatory array method has return sentence ,Array There are several filters , Methods of mapping and folding . If we forget return Write statements in these callbacks , That could be a mistake .
    'default-case': 1, // requirement switch There are default Branch
    'no-fallthrough': 1, // prohibit case The sentence failed
    'no-lonely-if': 1, // prohibit if As the only statement that appears in else In the sentence . If one if The statement is that else The only statement in the block , So use a else if Tables are usually clearer .
    'no-irregular-whitespace': 1, // Irregular whitespace outside strings and comments is prohibited
    'prefer-const': 0, // Required const Declare variables that are not modified after declaration . If a variable is never reassigned , Use const Statement is better .const The statement tells the reader ,“ This variable will never be reassigned ,” Reduce cognitive load and improve maintainability .
    'no-use-before-define': 1, // Do not use variables before they are defined
    'vue/attributes-order': 2, // vue api Order of use
    'vue/no-multiple-template-root': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-function': 0,
    'vue/multi-word-component-names': 0,
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)'],
      env: {
        mocha: true,
      },
    },
  ],
};
