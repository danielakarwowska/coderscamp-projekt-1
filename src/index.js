

import { User } from "./components/user.js";


console.log('test1');

document.querySelector('#register').addEventListener('click', event =>{
  event.preventDefault()
  let {username, password,mail} = Object.fromEntries(new FormData(document.getElementById('form')));
  let user = new User(username, mail, password)
  user.registerUser()
})



// function login () {
//   const loginToApp = document.getElementById('login-in-login');
//   const passwordToApp = document.getElementById('password-in-login');
// }





