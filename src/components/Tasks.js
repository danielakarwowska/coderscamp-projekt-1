export class ToDo {
    constructor(title, notes, location, date = Date.now(), checked =false){
        this.title =title,
        this.notes =notes,
        this.location =location,
        this.date = date,
        this.checked = checked
    }
    addTodo(list){
        list.push(this)
    }


renderTodo(todo){
    const item = document.querySelector('[data-key=${todo.id}]');
if (todo.deleted){
    item.remove();
    return
}
}
}