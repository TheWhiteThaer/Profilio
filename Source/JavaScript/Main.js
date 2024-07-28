// Define Navigators array
const Navigators = ["Home", "About", "Projects", "Contact"];

/* Website Icon */
const logo = document.createElement("link");
logo.setAttribute("rel", "icon");
logo.setAttribute("href", "../../Assets/Images/Logo.png");
logo.setAttribute("type", "image/x-icon");
document.head.appendChild(logo);

/* Fonts */
addFont(
  "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
);

addFont(
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
);

addFont(
  "https://fonts.googleapis.com/css2?family=Merienda:wght@300..900&display=swap"
);

addFont(
  "https://fonts.googleapis.com/css2?family=Merienda:wght@300..900&family=Righteous&display=swap"
);

const preconnect1 = document.createElement("link");
preconnect1.setAttribute("rel", "preconnect");
preconnect1.setAttribute("href", "https://fonts.googleapis.com");
document.head.appendChild(preconnect1);

const preconnect2 = document.createElement("link");
preconnect2.setAttribute("rel", "preconnect");
preconnect2.setAttribute("href", "https://fonts.gstatic.com");
document.head.appendChild(preconnect2);

const MainCss = document.createElement("link");
MainCss.setAttribute("rel", "stylesheet");
MainCss.setAttribute("href", "../CSS/Main.css");
document.head.appendChild(MainCss);

const Navigator = document.createElement("div");
Navigator.setAttribute("id", "Navigator");
document.body.appendChild(Navigator);

Navigators.forEach((element) => {
  const Navs = document.createElement("span");
  Navs.setAttribute("id", element);
  Navs.setAttribute("class", "NavigatorText");
  Navs.appendChild(document.createTextNode(element));
  Navigator.appendChild(Navs);
  if (Navs) {
    Navs.onclick = () => {
      location.replace(`../HTML/${element}.html`);
    };
  }
});

const planetModule = document.createElement("script");
planetModule.setAttribute("type", "module");
planetModule.setAttribute("src", "../JavaScript/Planet.js");

document.body.appendChild(planetModule);

function addFont(url) {
  const font = document.createElement("link");
  font.setAttribute("rel", "stylesheet");
  font.setAttribute("href", url);
  font.setAttribute("type", "text/css");
  document.head.appendChild(font);
}

export const SocialMedias = [
  { Name: "Whatsapp", Source: "https://wa.me/+963984518232" },
  {
    Name: "Facebook",
    Source: "https://www.facebook.com/Thaer-Ayoub-100000090821754/",
  },
  { Name: "Instagram", Source: "https://www.instagram.com/thewhitethaer/" },
  { Name: "X", Source: "https://x.com/TheWhiteThaer" },
  {
    Name: "Gmail",
    Source:
      "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWstwNRQGhTmbDfmrrgkfNmmqnBCbzNwZqqwFJzlPRNBVKVCBHnCFZhSRWRrMBRmpkrWMkWmB",
  },
  {
    Name: "Youtube",
    Source: "https://www.youtube.com/channel/UC_yAalS8t5e8JT0u9434Ygw",
  },
];
