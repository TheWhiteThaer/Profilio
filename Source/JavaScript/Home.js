import { Edit_Style, getEl } from "./Utils/Elements.js";

let ThaerAyoub = document.getElementById("ThaerAyoub");

ThaerAyoub.onclick = () => {
  window.open("../HTML/About.html", "_self");
};

let DotImg = getEl("DotImg");

let PixelArtCanvas = document.getElementById("PixelArtCanvas");

// Set canvas size to cover the entire viewport
PixelArtCanvas.width = window.outerWidth;
PixelArtCanvas.height = window.outerHeight;

Edit_Style(
  PixelArtCanvas,
  `
  z-index: -2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  image-rendering: pixelated;
`
);

let Ctx = PixelArtCanvas.getContext("2d");

Ctx.imageSmoothingEnabled = false;

const DotScale = 100;
const NumberOfDotsInARow = 5;
const DotNumber = 100;
const DotSpeed = 2; // Speed of the motion

let DotX = [];
let DotY = [];
let motionDirectionX = [];
let motionDirectionY = [];

function initializeDots() {
  for (let i = 0; i < DotNumber; i++) {
    DotX[i] = (i % NumberOfDotsInARow) * DotScale * 3;
    DotY[i] = Math.floor(i / NumberOfDotsInARow) * DotScale * 1.5;

    // Initialize random motion directions
    motionDirectionX[i] = (Math.random() - 0.5) * DotSpeed;
    motionDirectionY[i] = (Math.random() - 0.5) * DotSpeed;
  }
}

function updateDots() {
  for (let i = 0; i < DotNumber; i++) {
    DotX[i] += motionDirectionX[i];
    DotY[i] += motionDirectionY[i];

    // Bounce off edges
    if (DotX[i] < 0 || DotX[i] > PixelArtCanvas.width - DotScale) {
      motionDirectionX[i] *= -1;
    }
    if (DotY[i] < 0 || DotY[i] > PixelArtCanvas.height - DotScale) {
      motionDirectionY[i] *= -1;
    }
  }
}

function drawDots() {
  Ctx.clearRect(0, 0, PixelArtCanvas.width, PixelArtCanvas.height); // Clear canvas before redrawing

  for (let i = 0; i < DotNumber; i++) {
    Ctx.drawImage(DotImg, DotX[i], DotY[i], DotScale, DotScale);
  }
}

function animate() {
  updateDots();
  drawDots();
  requestAnimationFrame(animate); // Continuously call animate
}

// Initialize dots and start animation
initializeDots();
animate();
