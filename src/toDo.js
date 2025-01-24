// this class only responsible for storing/modifying the data for a todo item
export class toDo {
    static id = 0;

    constructor (title, description, dueDate, priority=null) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = toDo.id
        toDo.id++;
    }


};

// this class only responsible for storing/modifying a list of todo items
export class Project {

    constructor () {
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

}




