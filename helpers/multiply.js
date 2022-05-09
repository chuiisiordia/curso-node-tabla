require('colors');
const fs = require('fs');

const createFile = async( base = 5, heigth=5, list=false ) => {
    try{
        let output = '';

        for( let i = 1; i<=heigth; i++ ){
            output += `${base} x ${i} = ${ base * i }\n`;
        }

        if( list ){
            console.log('======================','\n',"Tabla del ", base,'\n','======================');
            console.log( output.green );
        }
            
        fs.writeFileSync(`./output/tabla-${base}.txt`, output);

        return `Archivo creado tabla-${base}.txt`;
    }
    catch(err){
        throw err;
    } 
    
}

module.exports = {
    createFile: createFile
}