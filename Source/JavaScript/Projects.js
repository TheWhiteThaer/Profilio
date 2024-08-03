import { Add, Edit_Style, Make_Element } from "./JavaScriptTools.js";
let MoonCanvas = document.getElementById("Moons");
let MoonPhase = "FullMoon";

let Moon = Make_Element("img", [
  {
    Name: "src",
    Value: `../../Assets/Images/Moons/${MoonPhase}.png`,
  },
]);

Edit_Style(
  Moon,
  `
 Scale: (20%, 20%);
 Position: (800px, 150px);
 user-select: none;
  `
);

Add(Moon);
