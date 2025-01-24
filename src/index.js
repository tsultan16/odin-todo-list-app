import {loadHomePage} from "./homePage.js";
import {loadMenuPage} from "./menuPage.js";
import {loadContactPage} from "./contactPage.js";
import "./style.css";

console.log("Hello World!");


// render homepage content
loadHomePage()

// add event listeners to nav buttons
const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const contact = document.querySelector("#contact");

home.addEventListener("click", (event) => {
    console.log("Loading home page.");
    loadHomePage();
});

menu.addEventListener("click", (event) => {
    console.log("Loading menu page.");
    loadMenuPage();
});

contact.addEventListener("click", (event) => {
    console.log("Loading contact page.");
    loadContactPage();
});




