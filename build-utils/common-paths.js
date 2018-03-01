const path = require('path');

module.exports = {
    entryPath: path.resolve(__dirname, '..', 'src', 'entry', '**', '*.js'),
    outputPath: path.resolve(__dirname, '..', 'docs')
};
