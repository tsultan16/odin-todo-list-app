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


export class Project {

    constructor () {
        this.toDoItems = {};
    }

    addToDoItem(item) {
        this.toDoItems[item.id] = item;
    }

}




