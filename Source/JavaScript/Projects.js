let projects = [];
let projectsNumber = 0;
function addProject(image, name, description, githubLink, year, month) {
  let projectEle = [];
  let rate = 1;
  const ProjectHandler = document.getElementById("ProjectHandler");

  const projectImg = document.createElement("img");
  const projectName = document.createElement("h3");
  const projectDescription = document.createElement("p");
  const projectGithub = document.createElement("img");

  let title = name + " | " + year + "-" + month + " | ";

  const separator = " | ";
  title =
    name +
    (year || month ? separator : "") +
    (year || "") +
    (month ? "-" + month : "") +
    (year || month ? separator : "");

  /* Changes The Properties */
  projectImg.setAttribute("src", image);
  projectGithub.setAttribute("src", "../../Assets/Images/Github.png");

  /* Adding A Child To The Child */
  projectName.appendChild(document.createTextNode(title));

  projectDescription.innerHTML += `${description}`;

  /* Adding All Of The Stuff To The Div */
  ProjectHandler.appendChild(projectImg);
  ProjectHandler.appendChild(projectName);
  ProjectHandler.appendChild(projectDescription);
  ProjectHandler.appendChild(projectGithub);
  /* Pushing */
  projectEle.push(projectImg);
  projectEle.push(projectName);
  projectEle.push(projectDescription);

  projectsNumber++;

  for (const pe of projectEle) {
    if (projectsNumber % 2 == 0) {
      setProp(pe, "left", "65%");
      rate = 1;
    } else {
      setProp(pe, "left", "5%");
      rate = 1.7;
    }
  }

  setProp(projectImg, "width", "30%");
  setProp(projectImg, "borderRadius", "25px");

  setProp(projectName, "position", "relative");
  setProp(projectName, "left", `${400 * rate}px`);
  setProp(projectName, "top", `${-230}px`);
  setProp(projectName, "font-family", "Margarine");
  setProp(projectName, "color", "whitesmoke");
  setProp(projectName, "font-size", "30px");

  setProp(projectDescription, "position", "relative");
  setProp(projectDescription, "left", `${380 * rate}px`);
  setProp(projectDescription, "top", `${-230}px`);
  setProp(projectDescription, "font-family", "Margarine");
  setProp(projectDescription, "color", "whitesmoke");
  setProp(projectDescription, "font-size", "20px");

  setProp(projectGithub, "width", "50px");
  setProp(
    projectGithub,
    "left",
    `${720 * (rate > 1 ? (rate += -0.31) : (rate = 1))}px`
  );
  setProp(projectGithub, "top", `${-355}px`);

  githubLink == undefined || githubLink == ""
    ? (projectGithub.style.display = "none")
    : (projectGithub.style.display = "block");
  projectGithub.onclick = () => {
    window.open(githubLink);
  };
  projectGithub.onmouseenter = () => {
    projectGithub.classList.add("HoverScale");
    projectGithub.classList.remove("NotHoverScale");
  };
  projectGithub.onmouseleave = () => {
    projectGithub.classList.add("NotHoverScale");
    projectGithub.classList.remove("HoverScale");
  };
  projectGithub.addEventListener("mouseenter", () => {
    document.body.style.cursor = "pointer";
  });
  projectGithub.addEventListener("mouseleave", () => {
    document.body.style.cursor = "default";
  });
}

function setProp(obj, prop, value) {
  return (obj.style[prop] = value);
}

addProject(
  "../../Assets/Images/Projects/VsFour.png",
  "Vs Four",
  "This is a fnf mode That in The U of BFB",
  "https://github.com/TheWhiteThaer/VsFour",
  "2024",
  "June"
);

addProject(
  "../../Assets/Images/Projects/VsFour.png",
  "Life Simulator",
  "This Is A Non Complete Experiment About Human's Sexuality",
  "https://github.com/TheWhiteThaer/Life-Simulator",
  "2024",
  "July"
);
