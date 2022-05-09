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

        /*if( empleado ){
            resolve( empleado );
        }
        else{
            reject( `No existe el empleado con id ${id}` );
        }*/
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

const id = 2;

/* verEmpleado( id )
    .then( empleado => console.log(empleado) )
    .catch( err => console.log(err) );

verSalario( id )
    .then( salario => console.log(salario) )
    .catch( err => console.log(err) ); */

/* verEmpleado( id )
    .then( empleado => {
        verSalario( id )
        .then( salario => {
            console.log('El empleado ', empleado.nombre, 'tiene un salario de ', salario.salario) 
        })
        .catch( err => console.log(err) );
    } )
    .catch( err => console.log(err) ) */

let emp;

verEmpleado(id)
    .then( empleado => {
        emp = empleado;

        return verSalario( id );
    })
    .then( salario => console.log('El empleado ', emp.nombre,' tiene un salrio de', salario.salario ))
    .catch( err => console.log(err) )