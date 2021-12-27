export class User{
    constructor(login, mail, password){
        //this.id = uuidv4()
        this.login= login;
        this.mail= mail;
        this.password= password;
    }
    registerUser(){
        localStorage.getItem(this.login) ? alert('already exist') : localStorage.setItem(this.login,JSON.stringify(this))
    }
    //loginUser() {
       // if(localStorage.getItem(this.login) === )
    }
