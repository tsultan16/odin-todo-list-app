// this class only responsible for storing/modifying the data for a todo item
export class toDo {
    static id = 0;

    constructor (title, description, dueDate, started=false, priority=null) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.started = started;
        this.priority = priority;
        this.completed = false;
        this.id = toDo.id
        toDo.id++;
    }

    complete () {
        this.completed = true;
    }


};

// this class only responsible for storing/modifying a list of todo items
export class Project {

    constructor (title="Default") {
        this.title = title;
        this.toDoItems = {};
    }

    addToDoItem (item) {
        this.toDoItems[item.id] = item;
    }

    removeToDoItem (item_id) {
        delete this.toDoItems[item_id]
    }

    getToDoItem (item_id) {
        return this.toDoItems[item_id];
    }

    // need a way to track percentage completed, i.e. fraction of items completed

}





// sample task creation
let sample_task_id = 0;

export function createSampleTask() {
    const item = new toDo(`title${sample_task_id}`, `desc${sample_task_id}`, randomDate());
    sample_task_id++;

    return item;
}

// create a random date between [from, to] range
function randomDate (from = new Date(2025, 0, 21), to = new Date(2025, 11, 31)) {
    return new Date(from.getTime() + Math.random() * (to.getTime() - from.getTime()));
}









