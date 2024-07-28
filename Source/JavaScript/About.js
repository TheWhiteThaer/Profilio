import { SocialMedias } from "./Main.js";

let Languages = [
  { Name: "JavaScript", Source: "https://www.w3schools.com/js/" },
  { Name: "Python", Source: "https://www.w3schools.com/python/" },
  {
    Name: "CSharp",
    Source: "https://learn.microsoft.com/en-us/dotnet/csharp/",
  },
];

for (const LanguagesElement of Languages) {
  let Language = document.getElementById(LanguagesElement.Name);
  Language.onclick = () => {
    window.open(LanguagesElement.Source);
  };
  Language.onmouseenter = () => {
    Language.classList.add("HoverScale");
    Language.classList.remove("NotHoverScale");
  };
  Language.onmouseleave = () => {
    Language.classList.add("NotHoverScale");
    Language.classList.remove("HoverScale");
  };
}

for (const SocialMediaElement of SocialMedias) {
  let SocialMedia = document.getElementById(SocialMediaElement.Name);
  if (SocialMedia) {
    SocialMedia.onclick = () => {
      window.open(SocialMediaElement.Source);
    };
    SocialMedia.onmouseenter = () => {
      SocialMedia.classList.add("HoverScale");
      SocialMedia.classList.remove("NotHoverScale");
    };
    SocialMedia.onmouseleave = () => {
      SocialMedia.classList.add("NotHoverScale");
      SocialMedia.classList.remove("HoverScale");
    };
  }
}
