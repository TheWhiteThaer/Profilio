let buttons = ["Projects", "About", "Contact"];

for (const button of buttons) {
  let b = document.getElementById(button + "Button");
  b.onclick = () => {
    location.replace("../HTML/" + button + ".html");
  };
  b.onmouseenter = () => {
    b.classList.add("HoverScale");
    b.classList.remove("NotHoverScale");
  };
  b.onmouseleave = () => {
    b.classList.add("NotHoverScale");
    b.classList.remove("HoverScale");
  };
}
