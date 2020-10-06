const fs = require('fs');
// const Sum = require('./includes/Sum'); // if Sum.js had `module.exports = Sum`, this would work.

// "require without require"
if (fs.existsSync('./includes/Sum.js')) {
    eval(fs.readFileSync('./includes/Sum.js', 'utf8'));
}

// now we have the function available from the required file.
console.log( Sum(2, 2) );
