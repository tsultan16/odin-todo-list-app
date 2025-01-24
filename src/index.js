import {loadHomePage} from "./homePage.js";
import {loadMenuPage} from "./menuPage.js";
import {loadContactPage} from "./contactPage.js";
import {toDo, Project, createSampleTask} from "./toDo.js";
import "./style.css";

// console.log("Hello World!");


// // render homepage content
// loadHomePage()

// // add event listeners to nav buttons
// const home = document.querySelector("#home");
// const menu = document.querySelector("#menu");
// const contact = document.querySelector("#contact");

// home.addEventListener("click", (event) => {
//     console.log("Loading home page.");
//     loadHomePage();
// });

// menu.addEventListener("click", (event) => {
//     console.log("Loading menu page.");
//     loadMenuPage();
// });

// contact.addEventListener("click", (event) => {
//     console.log("Loading contact page.");
//     loadContactPage();
// });


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


// load the home page
loadHomePage()



