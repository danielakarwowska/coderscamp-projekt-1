
const toggle = document.getElementById("toggle"),
sun = document.querySelector(".sun"),
body = document.querySelector("body");
let theme = "bright";

function setStyles(element, params) {
for(let i in params) {
element.style.setProperty(i, params[i]);
}
}

function themeChange() {
theme = theme === "bright" ? "dark" : "bright";
document.querySelector("section > h2").textContent = `Too ${theme}?`;

if(theme === "bright") {
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
