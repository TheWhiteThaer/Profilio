export function addFont(url) {
  const font = document.createElement("link");
  font.setAttribute("rel", "stylesheet");
  font.setAttribute("href", url);
  font.setAttribute("type", "text/css");
  document.head.appendChild(font);
}
