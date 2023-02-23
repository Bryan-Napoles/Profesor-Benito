class Carrera{
    nombre;
    generacion;
    #Grupo = [];
    constructor(nombre, generacion){
        this.nombre =  nombre;
        this.generacion =  generacion;
    }

    agregarGrupo = function(grupo){
        let grupos =  this.#Grupo;
        grupos.push(grupo);
    }
}