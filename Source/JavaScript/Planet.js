const starNumber = 300;
const stars = [];

for (let index = 0; index < starNumber; index++) {
  const star = document.createElement("img");
  stars.push(star);
}

for (let index = 0; index < stars.length; index++) {
  const element = stars[index];
  element.setAttribute("src", "../../Assets/Images/Star.png");
  document.body.appendChild(element);
  element.style.width = "0.5%";
  element.style.zIndex = "-1";
  element.style.userSelect = "none";
  element.style.position = "relative";
  element.style.left = `${Math.random(0, screen.width) * index}px`;
  element.style.top = "-1695px";
  element.style.top = `${Math.random() * -1695}px`;
  console.log();
}
