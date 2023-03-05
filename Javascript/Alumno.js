
class Alumno extends Persona{
    nombre;
    pellido_materno;
    apellido_paterno;
    matricula;
    grupo; 
    usuario;
    password;
    
    constructor(nombre, apellido_materno, apellido_paterno,matricula,grupo,usuario,password) {

        super(nombre, apellido_materno, apellido_paterno,matricula,grupo);
        this.nombre = nombre;
        this.apellido_materno = apellido_materno;
        this.apellido_paterno = apellido_paterno;
        this.matricula = matricula;
        this.grupo = grupo;
        this.usuario=usuario;
        this.password=password;
    }


    /**
     * 
     * @param {Grupo} grupo 
     */
    /*
    asignarGrupo = function (grupo) {
        this.Grupo = grupo
    }
    */
}