import { User } from "./components/user.js"

console.log('test1')

if(document.querySelector('#register') ){
  console.log('register')
  document.querySelector('#register').addEventListener('click', event =>{
    event.preventDefault();
    const passwordRegEx = `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$`;
    const mailRegEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    let {password,mail} = Object.fromEntries(new FormData(document.getElementById('form')));
    if(!mail.match(mailRegEx)) {
      alert(`Please provide valid e-mail.`);
      document.getElementById('mail').value = '';
      document.getElementById('password').value = '';
      return;
    }
    if(!password.match(passwordRegEx)) {
      alert(`Password must contain:
      At least one upper case English letter,
      At least one lower case English letter,
      At least one digit,
      At least one special character,
      Minimum eight characters.`);
      document.getElementById('mail').value = '';
      document.getElementById('password').value = '';
      return;
    }
    let user = new User(mail, window.btoa(password));
    user.registerUser();

  })    
}

if (document.querySelector('#login')){
  console.log('login')
  document.querySelector('#login').addEventListener('click', event=>{
    event.preventDefault();
  let {mail, password} =  Object.fromEntries(new FormData(document.getElementById('form-login')));
  let user = new User(mail, password);
    user.loginUser();
  
  })
}

