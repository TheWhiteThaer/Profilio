import {
  Change_Style,
  Edit_Style,
  OnMouse,
  Make_Element,
  Add,
  getEl,
  Random,
} from "./JavaScriptTools.js";
import { getOffset } from "./Utils.js";

let ThaerAyoub = document.getElementById("ThaerAyoub");

ThaerAyoub.onclick = () => {
  window.open("../HTML/About.html", "_self");
};

let Circles = getEl("Circles");
Edit_Style(
  Circles,
  `
  position: fixed;
  border:1px solid #000000;
  width: 99%;
  `
);

var ctx = Circles.getContext("2d");
ctx.beginPath();
ctx.imageSmoothingEnabled = false;
for (let index = 0; index <= 10; index++) {
  ctx.arc(
    Random(0, Circles.clientWidth, true),
    Random(0, Circles.clientHeight, true),
    10,
    0,
    3 * Math.PI
  );
}
ctx.stroke();
