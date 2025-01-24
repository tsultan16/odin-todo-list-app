import {loadHomePage} from "./homePage.js";
import {loadMenuPage} from "./menuPage.js";
import {loadContactPage} from "./contactPage.js";
import {toDo, Project} from "./toDo.js";
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


const item1 = new toDo("shopping1", "desc1", new Date(2025, 1, 21));
const item2 = new toDo("shopping2", "desc2", new Date(2025, 5, 14));
const item3 = new toDo("shopping3", "desc3", new Date(2025, 4, 6));

console.log(item1);
console.log(item2);
console.log(item3);

const proj = new Project();
proj.addToDoItem(item1);
proj.addToDoItem(item2);
proj.addToDoItem(item3);

console.log(proj.toDoItems);



