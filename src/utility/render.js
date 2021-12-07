export const render = (template, element) => {
  const placeholder = document.createElement('div');
  placeholder.innerHTML = template;
  document.querySelector(element).appendChild(placeholder);
};
