import { SocialMedias } from "./Main.js";

for (const SocialMedia of SocialMedias) {
  if (SocialMedia) {
    const SocialMediaElement = document.getElementById(SocialMedia.Name);
    SocialMediaElement.onclick = () => {
      window.open(SocialMedia.Source);
    };

    SocialMediaElement.onmouseenter = () => {
      SocialMediaElement.classList.add("HoverScale");
      SocialMediaElement.classList.remove("NotHoverScale");
    };
    SocialMediaElement.onmouseleave = () => {
      SocialMediaElement.classList.add("NotHoverScale");
      SocialMediaElement.classList.remove("HoverScale");
    };
  }
}
