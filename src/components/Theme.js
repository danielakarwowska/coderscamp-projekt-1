
const body = document.querySelector("body");
function setTheme(themeBright) {
  localStorage.setItem('theme', themeBright);
  document.documentElement.className = themeBright;
}



function toggleTheme() {
  if(localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-bright');
    document.querySelector("section > h2").textContent = `Too bright?`;
  } else {
    setTheme('theme-dark');
    document.querySelector("section > h2").textContent = `Too dark?`;
  }
}

(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-dark');
  } else {
    setTheme('theme-bright')
  }
})();

function terms_changed(termsCheckBox) {
  if(termsCheckBox.checked){
      document.getElementById("register").disabled = false;
      document.getElementById("register").style.opacity = 1;

  } else{
      document.getElementById("register").disabled = true;
      document.getElementById("register").style.opacity = 0.5;
  }
}