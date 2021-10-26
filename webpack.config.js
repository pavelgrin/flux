const path = require('path');

const MODE = {
    DEV: 'development',
    PROD: 'production',
}

module.exports = {
    mode: MODE.DEV,
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
