const { createFile } = require('./helpers/multiply');
const argv = require('./config/yargs');
require('colors/safe');

console.clear();


//const [ , , arg3 ] = process.argv;
//const [ , base ] = arg3.split('=');

console.log('Base de Yargs: ', argv.base);

createFile( argv.base, argv.h, argv.l )
    .then( fileName => console.log( fileName.rainbow, 'Created') )
    .catch( err=> console.log(err) );