import logoImage from "./images/restaurant-logo.svg";
import tasksImage from "./images/tasks.svg";
import projectsImage from "./images/projects.svg";
import plusImage from "./images/plus.svg";
import avatarImage from "./images/avatar.jpg";
import settingsImage from "./images/settings.svg";


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

    createSidebar();
    createUserInfo();
    createMainPanel();
    createFooter();
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

    addContent(sidebar);

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
    user_info.appendChild(user);
    addContent(user_info);

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
    addContent(main_panel);
    
}

const createMainPanelSection = (name, id) => {
    const section = document.createElement("div");
    section.id = id;
    const section_h4 = document.createElement("h4");
    section_h4.textContent = name; 
    section.appendChild(section_h4);
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
    addContent(footer);;
};



