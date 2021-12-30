import { User } from "./components/user.js"

console.log('test1')



if(document.querySelector('#register') ){
  console.log('register')
  document.querySelector('#register').addEventListener('click', event =>{
    event.preventDefault()
    let {password,mail} = Object.fromEntries(new FormData(document.getElementById('form')));
    let user = new User(mail, window.btoa(password));
    user.registerUser()
  })  
}

if (document.querySelector('#login')){
  console.log('login')
  document.querySelector('#login').addEventListener('click', event=>{
    event.preventDefault()
  let {mail, password} =  Object.fromEntries(new FormData(document.getElementById('form-login')));
  let user = new User(mail, password);
    user.loginUser()
  
  })
}

