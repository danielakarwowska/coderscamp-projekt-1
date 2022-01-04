export default class Store {
  static getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    return tasks;
  }

  static addTask(task) {
    const tasks = Store.getTasks();
    tasks.push(task);
    console.log(tasks);
    console.log(JSON.stringify(tasks));
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  // TODO
  static removeTask(number) {
    const tasks = Store.getTasks();

    tasks.forEach((task, index) => {
      if (task.number === number) {
        tasks.splice(index, 1);
      }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}
