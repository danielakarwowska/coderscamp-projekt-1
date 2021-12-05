
const toggle = document.getElementById("toggle"),
sun = document.querySelector(".sun"),
body = document.querySelector("body");
let theme = "jasno";

function setStyles(element, params) {
for(let i in params) {
element.style.setProperty(i, params[i]);
}
}

function themeChange() {
theme = theme === "jasno" ? "ciemno" : "jasno";
document.querySelector("section > h2").textContent = `Za ${theme}?`;

if(theme === "jasno") {
setStyles(body, {"--background": "#FBFFF1", "--text": "#3C3744", "--accent": "#3A6254"});

toggle.classList.remove("clicked");
sun.classList.remove("clicked");

} else {
setStyles(body, {"--background": "#3C3744", "--text": "#FBFFF1", "--accent": "#C41E3D"});

toggle.classList.add("clicked");
sun.classList.add("clicked");
}
}

toggle.addEventListener("click", themeChange);
