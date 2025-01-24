import {allTodoItems, loadMainPage, addToUpNext} from "./mainPage.js";
import {toDo, Project, createSampleTask} from "./toDo.js";

import "./style.css";

const numSamples = 7;
const default_project = new Project();

for (let i=0; i < numSamples; i++) {
    const item = createSampleTask();
    console.log(item);
    default_project.addToDoItem(item);
    allTodoItems[item.id] = item;
}

// console.log(proj);
// console.log(proj.toDoItems);

// load the home page
loadMainPage()



