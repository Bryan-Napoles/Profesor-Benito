class Helper{
    static getUsersFromLocalStorage(){
        let users= [];
        let arrayUsers = JSON.parse(localStorage.getItem('users'));
        if(arrayUsers != null){
            if(arrayUsers.length!= 0){
                arrayUsers.forEach(userarray => {
                    let user2 =new User(userarray.email, userarray.password, userarray.nombre, userarray.apellidoap, userarray.apellidoam, userarray.NSS, userarray.fecha_nacimiento);
                    users.push(user2);
                });
            }
        }
        return users;
    }
        
}