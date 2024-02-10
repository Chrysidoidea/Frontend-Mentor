"use strict";


const grid = new Array(100).fill(null);
// const cooore = document.documentElement
const root = document.querySelector("#root");
const DATA = {
  NAME: "Frontend Mentor Projects:",
  PROJECTS: [
    {
      id: "newsletter-sign-up-with-success-message-main",
      name: "Newsletter",
      url: "newsletter-sign-up-with-success-message-main/index.html",
      picture: "assets/images/newsletter-sign-up-with-success-message-main.png",
    },
    {
      id: "Space tourism multi-page website",
      name: "Space Tourism",
      url: "https://chrysidoidea.github.io/Space-Tourism/",
      picture: "assets/images/space.png",
    },
    {
      id: "empty",
      name: "empty",
      url: "#",
      picture:
        "assets/background/empty_house.png",
    },
  ],
};
void (function () {
  //creating background first layer
  const backgroundCoreLayer = document.createElement("div");
  backgroundCoreLayer.className = "background-core-layer";
  root.appendChild(backgroundCoreLayer);
  //creating background second layer
  grid.map((e) => {
    const gridBackground = document.createElement("net");
    gridBackground.className = "net";
    backgroundCoreLayer.appendChild(gridBackground);
  });
  //creating light source
  const light = document.createElement("div");
  light.className = "light";
  backgroundCoreLayer.appendChild(light);
  //bind light source to mousemove
  backgroundCoreLayer.addEventListener("mousemove", (e) => {
    backgroundCoreLayer.style.setProperty("--x", e.clientX + "px");
    backgroundCoreLayer.style.setProperty("--y", e.clientY + "px");
  });

  //creating header element
  const header = document.createElement("div");
  header.className = "header";
  header.textContent = DATA.NAME;

  //creating ulElement for our cards
  const ulElement = document.createElement("ul");
  ulElement.className = "Ul";
//cards created through loop, we use DATA.PROJECTS as a source
  for (const [_, project] of Object.entries(DATA.PROJECTS)) {
    const liElement = document.createElement("li");
    const liHeader = document.createElement("h2");
    const link = document.createElement("a");
    const container = document.createElement("div");

    liElement.addEventListener("mouseenter", () => {
      liHeader.classList.add("hovered");
    });
    liElement.addEventListener("mouseleave", () => {
      liHeader.classList.remove("hovered");
    });
    container.className = "container";
    container.style.background = `url(${project.picture}) no-repeat`;
    container.style.backgroundSize = "cover";
    container.style.backgroundPosition = "center";
    container.style.height = "100%";
    container.style.width = "100%";

    liElement.className = "front-element";
    liHeader.className = "front-element_header";
    liHeader.textContent = project.name;

    link.className = "link";

    //Create a simple checker that verifies if the URL is empty. If it is not empty, set the link.
    if (project.url !== "#") {
      link.setAttribute("href", project.url);
      link.setAttribute("target", "_blank");
    }

    ulElement.appendChild(liElement);
    liElement.appendChild(container);
    container.appendChild(liHeader);
    liElement.appendChild(link);
  }

  //creating last layer wrapper, which will contain cards
  const mainWrapper = document.createElement("main");
  mainWrapper.className = "wrapper";
  backgroundCoreLayer.appendChild(mainWrapper);
  mainWrapper.appendChild(ulElement);

  root.appendChild(header);
})();
