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

const verEmpleado = (id, callback) =>{
    const empleado = empleados.find( e => e.id === id );

    if( empleado ){
        callback(null, empleado);
    }
    else{
        callback(`Empleado con id ${id} no existe)`);
    }
}

const verSalario = (id, callback) => {
    const salario = salarios.find( s => s.id === id );

    if( salario ){
        callback(null, salario);
    }
    else{
        callback(`El empleado con id ${id} no tiene salaria registrado`);
    }
}

const id = 3;

verEmpleado(id, (err, empleado) => {
    if (err){
        console.log("ERROR!!");
        return console.log( err );
    }

    console.log("Empleado acontrado!!");
    console.log(empleado);
})

verSalario(id, (err, salario)=>{
    if (err){
        console.log("ERROR!!");
        return console.log( err );
    }

    console.log("Salario acontrado!!");
    console.log(salario);
});