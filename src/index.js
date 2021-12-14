

function register () {
  const login = document.getElementById('login');
  const mail = document.getElementById('mail');
  const password = document.getElementById('password');
  localStorage.setItem ("login", login.value );
  localStorage.setItem ("password", password.value);
  localStorage.setItem ("mail", mail.value);
};


// function login () {
//   const loginToApp = document.getElementById('login-in-login');
//   const passwordToApp = document.getElementById('password-in-login');
// }





