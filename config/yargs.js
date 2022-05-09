const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption:true,
        describe:'Es la base de la table de multiplicar'
    })
    .option('l', {
        alias:'list',
        type:'boolean',
        default:false,
        describe:'Muestra la tabla en consola'
    })
    .option('h', {
        alias:'heigth',
        type:'number',
        demandOption:true,
        describe:'Indica el numero de veces que se hara la multiplicacion'
    })
    .check( (argv, options) => {
        if( isNaN(argv.b) )
            throw 'La base debe ser un numero';

        return true;
    })
    .argv;

module.exports = argv;