 class Persona{
    name;
    date;
    nombre;
    date;
    email;
    apellidos;
    fecha_nacimiento;
    
    

    constructor(name, lastname , date , email,apellidos,id){
        this.nombre = name;
        this.apellidos = lastname;
        this.fecha_nacimiento = date;
        this.email = email;
       

    }

    
    
    
    calcular_edad = function(){
        let fecha_actual = new Date();
        let fecha_nacimiento = new Date(this.fecha_nacimiento);
        let edad = fecha_actual.getFullYear() - fecha_nacimiento.getFullYear();
        let mes =  fecha_actual.getMonth() - fecha_nacimiento.getMonth();
        if( mes < 0 || ( mes === 0 && fecha_actual.getDate() < fecha_nacimiento.getDate())) {
            edad--;
        }
        return edads;
    }
}

