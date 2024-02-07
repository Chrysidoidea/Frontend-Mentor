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
      id: "empty",
      name: "empty",
      url: "create-image-which-represent-this-code-background-dcdcdc-background-image-linear-gradient45d-758775127",
      picture:
        "assets/background/create-image-which-represent-this-code-background-dcdcdc-background-image-linear-gradient45d-758775127.png",
    },
  ],
};

void (function () {
  const mainWrapper = document.createElement("main");
  const header = document.createElement("h1");
  header.className = "header";
  header.textContent = DATA.NAME;

  const ulElement = document.createElement("ul");
  ulElement.className = "Ul";

  for (const [_, project] of Object.entries(DATA.PROJECTS)) {
    const liElement = document.createElement("li");
    const liHeader = document.createElement("h2");
    const link = document.createElement("a");
    const container = document.createElement("div");

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
    link.href = project.url;

    ulElement.appendChild(liElement);
    liElement.appendChild(container);
    container.appendChild(liHeader);
    container.appendChild(link);
  }

  mainWrapper.appendChild(header);
  mainWrapper.appendChild(ulElement);

  mainWrapper.className = "wrapper";
  root.appendChild(mainWrapper);
})();

const liElement = document.querySelectorAll(".front-element");
const liHeader = document.querySelectorAll(".front-element_header");
