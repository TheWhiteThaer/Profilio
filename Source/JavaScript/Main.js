import {
  Add,
  addFont,
  Change_Style,
  Edit_Style,
  Make_Element,
  OnMouse,
  Translate,
} from "./JavaScriptTools.js";
import { tween } from "./JSTween.js";
import { TextFont, Language } from "./Shared.js";

addFont(
  "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Pixelify+Sans:wght@400..700&family=Ubuntu+Sans+Mono:ital,wght@0,400..700;1,400..700&display=swap"
);

const preconnect1 = document.createElement("link");
preconnect1.setAttribute("rel", "preconnect");
preconnect1.setAttribute("href", "https://fonts.googleapis.com");
document.head.appendChild(preconnect1);

const preconnect2 = document.createElement("link");
preconnect2.setAttribute("rel", "preconnect");
preconnect2.setAttribute("href", "https://fonts.gstatic.com");
document.head.appendChild(preconnect2);

/* Vars */
let InfoBarArray = ["Home", "Projects", "About", "Contact"];

/* Elements */
let InfoBar = Make_Element("div", null, null, "InfoBar");

function InfoBarLogic() {
  InfoBarArray.forEach((element) => {
    let InfoBarElements = Make_Element("span", null, element, element);

    Edit_Style(
      InfoBarElements,
      `margin-left: ${
        100 / (InfoBarArray.length + 2)
      }%; position: relative; top: 13px; cursor: pointer; opacity: 0.5; font-family: ${TextFont};`
    );

    OnMouse(
      InfoBarElements,
      () => {
        Change_Style(InfoBarElements, "opacity", "1");
      },
      () => {
        Change_Style(InfoBarElements, "opacity", "0.5");
      }
    );
    InfoBarElements.onclick = () => {
      window.open("../HTML/" + element + ".html", "_self");
    };
    Translate(InfoBarElements, "English", "Main", "InfoBar");

    InfoBar.appendChild(InfoBarElements);
  });

  Edit_Style(
    InfoBar,
    "background-color: #EBF4F6; border-radius: 10px; Scale: (100%, 50px); user-select: none; opacity: 0.8;"
  );
  Add(InfoBar);
}
InfoBarLogic();

document.body.style.overflowX = "hidden";
// var path = window.location.pathname;
// var page = path.split("/").pop().split(".")[0];

// if (page == "Home") {
// }
