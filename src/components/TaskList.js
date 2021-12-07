class TaskList {
  #elements;
  #title;
  constructor(title = null, elements = []) {
    if (!title) {
      throw 'Cannot be empty';
    }
    this.#title = title;
    this.#elements = elements;
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
}
