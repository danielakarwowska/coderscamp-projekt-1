export class User{
    constructor(mail, password){
        //this.id = uuidv4()
        this.mail= mail;
        this.password= password;
    }
    //let user = new User(username, password)

    registerUser(){
        localStorage.getItem(this.mail) ? alert('already exist') : localStorage.setItem(this.mail,JSON.stringify(this))
        window.location.replace('newTask.html');
    }

   loginUser() {
    let {mail, password} = JSON.parse(localStorage.getItem(this.mail));
      if(mail === this.mail && window.atob(password) === this.password) {
      let user = Object.assign(new User, JSON.parse(localStorage.getItem('mail')))
        window.location.replace('newTask.html');
     } else {
          alert ( "Wrong e-mail or password");
      }
   };
}
