export class Theme {
    constructor() {}

    static setStyles(element, params) {
        for (let i in params) {
            element.style.setProperty(i,params[i]);
          }
    }

    static themeChange () {
    
        if (document.getElementById('toggle').classList.contains('clicked')) {
          Theme.setStyles(document.querySelector('body'), { '--background': '#FBFFF1', '--text': '#3C3744', '--accent': '#3A6254' });
          document.querySelector('section > h2').textContent = `Too Bright?`;
          document.getElementById('toggle').classList.toggle('clicked');
          document.querySelector('.sun').classList.toggle('clicked');
        } else {
          Theme.setStyles(document.querySelector('body'), { '--background': '#3C3744', '--text': '#FBFFF1', '--accent': '#C41E3D' });
          document.querySelector('section > h2').textContent = `Too Dark?`;
          document.getElementById('toggle').classList.toggle('clicked');
          document.querySelector('.sun').classList.toggle('clicked');
        }
    }
}