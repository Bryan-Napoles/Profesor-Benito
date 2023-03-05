class User {
    email;
    password;
    nombre;
    apellidoap;
    apellidoam;
    NSS;
    fecha_nacimiento;

    constructor(name, password, names, apellidop, apellidom, NSS, f_nac){
        this.email = name;
        this.password = password;
        this.nombre =  names;
        this.apellidoap = apellidop;
        this.apellidoam = apellidom;
        this.NSS = NSS;
        this.fecha_nacimiento = f_nac;


    }
    
    /**
     * 
     * @param {Array} users 
     * @returns 
     */
    login(users){
        let result = users.find(({ email }) => email === this.email);
        if(result == undefined){
            return "El usuario no se encuentra registrado";
        } 
        else{
            return result.password == this.password ? true : 'Contraseña incorrecta';
        }
    }
}