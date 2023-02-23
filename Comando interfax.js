var user;
var password;
var alumnos =[];

function login(){
    

    this.carga_alumnos();
    

    user = document.getElementById("usuario").value;    
    password = document.getElementById("contraseña").value;

    //alert("Usuario: "+user+" y Password: "+password);
    let autorizado=false;
º
    for(let i = 0; i < alumnos.length; i++){
        //alert("Alumno : " + (i+1));
        let sesion = alumnos[i];
        let terminar = false;
        if(user==sesion.usuario && password==sesion.password){
            autorizado=true;
            terminar = true;
        }
        

        if(terminar==true){
            break;   
        }
    }  
    if(autorizado==true){
        alert("usuario autorizado");
        window.location.href = "indice.html";

    }else{
        alert("usuario no autorizado");
    }
}
    /*
    if(user=="Usuario"  && password== "1234" ){ 
        alert("Voy a llamar la clase alumno");
        //let alumno = new Alumno("jose","Nuñez","Carrillo","132213","32");
        alert("Termine de llamar la clase alumno");

        


        //window.location.href = "Compu.html";
    }else{ 
        alert("Datos incorrectos")
    }
    */



function carga_alumnos(){
   alumnos.push(new Alumno("jose","Nuñez","Carrillo","132213","32","Jose","123"));
   alumnos.push(new Alumno("Julio","Perez","Orozco","132243","27","Julio","123"));
   alumnos.push(new Alumno("Juan","Perez","Orozco","132243","27","Juan","123"));
   alumnos.push(new Alumno("Juan","Perez","Orozco","132243","27","Luis","123"));
   alumnos.push(new Alumno("Juan","Perez","Orozco","132243","27","Benito","123"));
   alumnos.push(new Alumno("Juan","Perez","Orozco","132243","27","Aranza","123"));
   alumnos.push(new Alumno("Juan","Perez","Orozco","132243","27","Daniel","123"));
   alumnos.push(new Alumno("Juan","Perez","Orozco","132243","27","Ricardo","123"));
   alumnos.push(new Alumno("Juan","Perez","Orozco","132243","27","Bruno","123"));
  

}