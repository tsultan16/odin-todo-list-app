import logoImage from "./images/restaurant-logo.svg";

const content = document.querySelector("#content");

export const addContent =  (HTMLelement) => {
    content.appendChild(HTMLelement);
};



const clearAllContent = () => {
    while (content.lastChild) {
        content.lastChild.remove();
    }
};

export const loadHomePage = () => {

    // clear out all existing content first
    clearAllContent();

    const header = document.createElement("h1");
    header.textContent = "Don Giovanni's";
    content.appendChild(header);
    
    const logo_container = document.createElement("div");
    logo_container.id = "logo-container";
    const logo = document.createElement("img");
    logo.src = logoImage;
    logo.id = "logo";
    logo_container.appendChild(logo)
    addContent(logo_container);
    
    const tagline_header = document.createElement("h2");
    const tagline = document.createElement("em");
    tagline.textContent = "Savor the Heart of Italy, One Bite at a Time.";
    tagline_header.appendChild(tagline);
    addContent(tagline_header); 
    
    const desc = document.createElement("p");
    desc.textContent = "At Don Giovanni's, we bring the authentic flavors of Italy to your table. From handcrafted pastas to wood-fired pizzas, every dish is prepared with the finest ingredients and a passion for tradition. Whether you're celebrating a special occasion or craving a comforting meal, our warm ambiance and rich culinary heritage promise an unforgettable dining experience. Bon appetit!"
    addContent(desc);
    
};




