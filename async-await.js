const empleados = [
    {
        id:1,
        nombre:"Jesus"
    },
    {
        id:2,
        nombre:"Fulano"
    },
    {
        id:3,
        nombre:"Sutano"
    }
];

const salarios=[
    {
        id:1,
        salario:1500
    },
    {
        id:2,
        salario:1300
    }
];

const verEmpleado = (id) =>{
    const promesa = new Promise( (resolve, reject)=>{
        const empleado = empleados.find( e => e.id === id );

        (empleado)
            ? resolve( empleado )
            : reject( `No existe el empleado con id ${id}` );
    } );

    return promesa;
}

const verSalario = (id)=>{
    return new Promise( (resolve, reject)=>{
        const salario = salarios.find( s => s.id === id );

        (salario)
            ? resolve( salario )
            : reject( `El empleado con id ${id} no tiene un salario registrado` );
    } );
}

const verInfo = async(id) => {
    try{
        const empleado = await verEmpleado(id);
        const salario = await verSalario(id);

        return `El salario del empleado ${empleado.nombre} es de ${salario.salario}`;
    }
    catch(err){
        throw err;
    }
    
} 

const id = 4;

verInfo( id )
    .then( msj => console.log(msj) )
    .catch( err => console.log(err) );


