import { render } from '../utility/Render.js';

export class TaskList {
  #elements;
  #title;
  constructor(title = null, elements = []) {
    if (!title) {
      throw 'Cannot be empty';
    }
    this.#title = title;
    this.#elements = elements;
    render(this.renderList(), '.box');
  }
  set setTitle(title) {
    if (!title) {
      throw 'Cannot be empty';
    }
    this.#title = title;
  }
  get getTitle() {
    if (this.#title.lenght === 0) {
      return undefined;
    }
    return this.#title;
  }
  set pushTask(task) {
    if (task instanceof ToDo) {
      this.#elements.push(task);
    }
  }
  get getTaskList() {
    if (this.#elements.length === 0) {
      return console.log('Nothing Todo!');
    }
    return this.#elements;
  }
  renderList() {
    const template = `<div class="list">
    <h3 class="listTitle"></h3>
     <form>
       <input type="checkbox">
       <input type="text" placeholder="Title">
       <input type="text" placeholder="Notes">
       <input type="text" placeholder="Localization">
       <input type="date">
     </form>
  </div>`;
    return template;
  }
}

window.TaskList = TaskList;
