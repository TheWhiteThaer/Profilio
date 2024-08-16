import { Add, Edit_Style, Make_Element } from "./JavaScriptTools.js";
import { GetJsonFile, ReadFileContent } from "./Utils/File.js";
import { HoveringColorChange } from "./Utils/Mouse.js";

let Projects = [];

let ProjectSpace = 200;

let YSpace = -150;

function AddProject(Name, Date, Image, Description, Github) {
  YSpace += ProjectSpace;

  let NameText = Make_Element("button", null, Name, null);
  Edit_Style(
    NameText,
    `
    background-color: transparent;
    border: none;
    font-size: 32px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 24%;

  `
  );

  // ----------- Github Logic ---------------

  Github ? GithubHandler(Github, NameText) : Github;

  // ----------- Date Logic ------------
  let DateText = Make_Element("h2", null, DateEditer(Date), null);

  // ----------- Description Logic ------------
  let DescriptionText = Make_Element("h2", null, Description, null);

  for (var Els of [NameText, DateText, ImageEditor(Image), DescriptionText]) {
    Edit_Style(
      Els,
      `
    text-align: center;
    font-family: "Pixelify Sans";
    color: whitesmoke;
    position: relative;
    top: ${YSpace}px;
    `
    );
    Add(Els);
  }

  Projects.push({
    Name,
    Date,
    Image,
    Description,
    Github,
  });
}

function DateEditer(Date) {
  let FullDate = "";
  FullDate += CheckDate(Date.Year);
  FullDate += CheckDate(Date.Year ? " / " + Date.Month : Date.Month);
  FullDate += CheckDate(" / " + Date.Day);
  return FullDate;
}

function CheckDate(DatePeriod) {
  let Date = "";
  DatePeriod ? (Date += DatePeriod) : DatePeriod;
  return Date;
}

function ImageEditor(Image) {
  let ProjectImage = Make_Element(
    "img",
    [
      {
        Name: "src",
        Value: Image,
      },
    ],
    null,
    null
  );

  Edit_Style(
    ProjectImage,
    `
    Scale: (20%, 20%);
    border-radius: 10px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    `
  );
  return ProjectImage;
}

function GithubHandler(GithubLink, GithubButton) {
  Edit_Style(GithubButton, "cursor: pointer;");
  HoveringColorChange(GithubButton, "whitesmoke", "gray");
  GithubButton.onclick = () => {
    window.open(GithubLink, "_target");
  };
}

let ProjectSaved = await GetJsonFile(
  await ReadFileContent("../../Assets/Data/Projects.json")
);

ProjectSaved.forEach((Project) => {
  AddProject(
    Project["Name"],
    {
      Year: Project["Date"]["Year"],
      Month: Project["Date"]["Month"],
      Day: Project["Date"]["Day"],
    },
    `../../Assets/Images/Projects/${Project["Image"]}.png`,
    Project["Description"],
    Project["Github"]
  );
});
