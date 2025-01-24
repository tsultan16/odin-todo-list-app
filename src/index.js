import {allTodoItems, loadMainPage, addToUpNext} from "./mainPage.js";
import {toDo, Project, createSampleTask} from "./toDo.js";

import "./style.css";



const item1 = createSampleTask();
const item2 = createSampleTask();
const item3 = createSampleTask();

console.log(item1);
console.log(item2);
console.log(item3);

const proj = new Project();
proj.addToDoItem(item1);
proj.addToDoItem(item2);
proj.addToDoItem(item3);

console.log(proj);
console.log(proj.toDoItems);

proj.removeToDoItem(item2.id);
console.log(proj.toDoItems);

console.log(proj.getToDoItem(item1.id));


allTodoItems.push(item1);
allTodoItems.push(item2);
allTodoItems.push(item3);



// load the home page
loadMainPage()



