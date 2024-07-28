let Buttons = ["Projects", "About", "Contact"];

for (const ButtonElement of Buttons) {
  let Button = document.getElementById(ButtonElement + "Button");
  Button.onclick = () => {
    location.replace("../HTML/" + ButtonElement + ".html");
  };
  Button.onmouseenter = () => {
    Button.classList.add("HoverScale");
    Button.classList.remove("NotHoverScale");
  };
  Button.onmouseleave = () => {
    Button.classList.add("NotHoverScale");
    Button.classList.remove("HoverScale");
  };
}
