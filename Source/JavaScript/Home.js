import {
  Change_Style,
  Edit_Style,
  OnMouse,
  Make_Element,
  Add,
} from "./JavaScriptTools.js";
import { getOffset } from "./Utils.js";

let ThaerAyoub = document.getElementById("ThaerAyoub");

ThaerAyoub.onclick = () => {
  window.open("../HTML/About.html");
};

function AddClouds(Number) {
  for (let index = 0; index < Number; index++) {
    let RandomCloud = Math.floor(Math.random() * 3) + 1;
    let Animation = "MovesLeft";
    let Cloud = Make_Element(
      "img",
      [
        {
          Name: "src",
          Value: `../../Assets/Images/Clouds/Cloud${RandomCloud}.png`,
        },
      ],
      null,
      `Cloud${RandomCloud}`
    );

    Edit_Style(
      Cloud,
      `Position: (${Math.floor(
        Math.random() * screen.availWidth - 500
      )}px, -20px); 
      z-index: -2;., 
      Scale: (${Math.floor(Math.random() * 20 + 10)}%, 
      ${Math.floor(Math.random() * 10)}%); 
      user-select: none;
      `
    );
    Add(Cloud);
  }
}

AddClouds(10);
