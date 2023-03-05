var users = Helper.getUsersFromLocalStorage();

function loginUser(){
    let user = document.getElementById('email');
    let pass = document.getElementById('password');
    let nom = document.getElementById('nombre');
    let ap = document.getElementById('apellidoap');
    let am = document.getElementById('apellidoam');
    let nss = document.getElementById('NSS');
    let fech = document.getElementById('fech');

    let user1 = new User(user.value, pass.value);
    let login = user1.login(users)
    if( login != true){
        alert(login);
    }else{
        window.location.href ="registrarse.html";
    }
}