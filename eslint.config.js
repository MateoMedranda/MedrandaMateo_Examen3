export default [
    {
        files: ['**/*.js'],
        languagesOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        rules: {
            semi: ['error', 'always'],
            quotes: ['error', 'single']
        }
    }
];