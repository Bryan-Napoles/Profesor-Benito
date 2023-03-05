var users = Helper.getUsersFromLocalStorage();

function registerUser(){
    let user = document.getElementById('email');
    let pass = document.getElementById('password');
    let nom = document.getElementById('nombre');
    let ap = document.getElementById('apellidoap');
    let am = document.getElementById('apellidoam');
    let nss = document.getElementById('NSS');
    let fech = document.getElementById('fech');

    let user1 = new User(user.value, pass.value, nombre.value, ap.value, am.value, nss.value, fech.value);
    
    let result =users.find(({email}) => email === user.value);
    
    if(result == undefined){
        users.push(user1);
        localStorage.setItem('users',JSON.stringify(users));
        alert("Usuario Registrado");
        user.value="";
        pass.value="";
    }else{
        alert("El usuario ya se encuentra registrado");
    }
}
