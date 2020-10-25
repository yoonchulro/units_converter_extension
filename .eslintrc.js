module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['eslint:recommended', '@upstatement/eslint-config/four-spaces', 'prettier'],
    parser: 'espree',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {},
};
