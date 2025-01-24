import logoImage from "./images/restaurant-logo.svg";
import tasksImage from "./images/tasks.svg";
import projectsImage from "./images/projects.svg";
import plusImage from "./images/plus.svg";
import avatarImage from "./images/avatar.jpg";
import settingsImage from "./images/settings.svg";
import editImage from "./images/edit.svg";


const body = document.querySelector("body");

export const addContent = (HTMLelement) => {
    body.appendChild(HTMLelement);
};


const clearAllContent = () => {
    while (body.lastChild) {
        body.lastChild.remove();
    }
};

export const loadHomePage = () => {

    // clear out all existing content first
    clearAllContent();

    const content = document.createElement("div");
    content.id = "content";
    const sidebar = createSidebar();
    const user_info = createUserInfo();
    const main_panel = createMainPanel();
    const footer = createFooter();
    content.appendChild(sidebar);
    content.appendChild(user_info);
    content.appendChild(main_panel);
    content.appendChild(footer);
    addContent(content);
};


const createSidebar = () => {
    const sidebar = document.createElement("div");
    sidebar.id = "sidebar";

    const section1 = document.createElement("div");
    section1.classList.add("sidebar-section");
    const tasks = createSidebarItem("All Tasks", "all-tasks-button", tasksImage);
    const projects = createSidebarItem("All Projects", "all-projects-button", projectsImage);
    section1.appendChild(tasks);
    section1.appendChild(projects);

    const section2 = document.createElement("div");
    section2.classList.add("sidebar-section");
    const new_project = createSidebarItem("New Project", "new-project-button", plusImage);
    const new_todo = createSidebarItem("New Todo", "new-todo-button", plusImage);
    section2.appendChild(new_project);
    section2.appendChild(new_todo);

    sidebar.appendChild(section1);
    sidebar.appendChild(section2);
    
    // handle sidebar button clicks 
    sidebar.addEventListener("click", (event) => {
        const target_id = event.target.id;
        console.log(`Clicked on ${target_id}!`);

    }); 

    return sidebar;

};

const createSidebarItem = (text, button_id, icon) => {
    const section = document.createElement("div");
    section.classList.add("sidebar-item");
    const section_icon = document.createElement("img");
    section_icon.src = icon;
    section_icon.classList.add("sidebar-icon");
    const section_button = document.createElement("button");
    section_button.type = "button";
    section_button.id = button_id;
    section_button.textContent = text;
    section.appendChild(section_icon);
    section.appendChild(section_button);
    return section;
};


const createUserInfo = () => {
    const user_info = document.createElement("div");
    user_info.id = "user-info";
    
    const date = document.createElement("div");
    date.id = "today-date";
    date.textContent = "Friday Jan 24"; // hard-coded for now

    const app_title = document.createElement("h2");
    app_title.id = "today-date";
    app_title.textContent = "My Todo List App"; // hard-coded for now


    const user = document.createElement("div");
    user.id = "user";
    const name = document.createElement("p");
    name.textContent = "Tanzid Sultan"; // hard-coded for now
    const avatar_icon = document.createElement("img");
    avatar_icon.src = avatarImage;
    avatar_icon.id = "avatar";
    user.appendChild(name);
    user.appendChild(avatar_icon)
    
    user_info.appendChild(date);
    user_info.appendChild(app_title);
    user_info.appendChild(user);
    return user_info;

};


const createMainPanel = () => {
    const main_panel = document.createElement("div");
    main_panel.id = "main-panel";

    const due_today = createMainPanelSection("Due Today", "due-today");
    const up_next = createMainPanelSection("Up Next", "up-next");
    const recently_completed = createMainPanelSection("Recently Completed", "recently-completed");
    main_panel.appendChild(due_today);
    main_panel.appendChild(up_next);
    main_panel.appendChild(recently_completed);
    return main_panel;
    
}

const createMainPanelSection = (name, id) => {
    const section = document.createElement("div");
    section.id = id;
    const section_h4 = document.createElement("h4");
    section_h4.textContent = name;
    const container = document.createElement("div");
    container.classList.add("task-container");    
    section.appendChild(section_h4);
    section.append(container);
    return section;
}

const createFooter = () => {
    const footer = document.createElement("footer");
    
    const icon = document.createElement("img");
    icon.src = settingsImage;
    icon.classList.add("sidebar-icon");
 
    const button = document.createElement("button");
    button.type = "button";
    button.id = "settings-button";
    button.textContent = "Settings"
    
    footer.appendChild(icon);
    footer.appendChild(button);
    return footer;
};


// add and render a todo item in the up next section of main panel
export const addToUpNext = (todo) => {
    const container = document.querySelector("#up-next > .task-container");
    console.log(container);

    // create a task card
    const card = document.createElement("div");
    card.classList.add("task-card");

    const task_details = document.createElement("div");
    task_details.classList.add("task-details");
    const title = document.createElement("div");
    title.classList.add("task-title");
    title.textContent = todo.title;
    const due = document.createElement("div");
    due.textContent = todo.dueDate.toLocaleDateString();
    due.classList.add("task-due-date");
    const priority = document.createElement("div");
    priority.classList.add("task-priority");
    priority.textContent = "!".repeat(todo.priority);
    task_details.appendChild(priority);
    task_details.appendChild(title);
    task_details.appendChild(due);

    const edit_icon = document.createElement("img");
    edit_icon.src = editImage;
    edit_icon.classList.add("task-edit-icon");

    // add the task id to data attribute, will need later for editing
    edit_icon.dataset.id = String(todo.id);

    // add click handler for edit icon
    edit_icon.addEventListener("click", (e) => {
        const target = e.target;
        const task_id = parseInt(target.dataset.id);
        console.log(`Clicked edit for task id ${task_id} in Up Next Panel`);
    });


    card.appendChild(task_details);
    card.appendChild(edit_icon);
    container.appendChild(card);

    console.log(`Added task to Up Next: ${todo.print()}`);

}





