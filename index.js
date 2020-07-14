const fs = require('fs');
const babelConfig = JSON.parse(fs.readFileSync('./.babelrc'));
require('babel-register')(babelConfig);
module.exports = require('./app.js');