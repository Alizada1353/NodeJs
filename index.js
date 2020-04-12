// const path = require('path')
// console.log(`the file name is ${path.basename(__filename)}`);

const grap =  flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
};

const greeting = grap('--greeting');
const person = grap('--person');

console.log(`${greeting} ${person}`);