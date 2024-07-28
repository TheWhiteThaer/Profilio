let languages = ["JavaScript", "CPP", "CSharp"];
let socialMedias = ["X", "Youtube", "Instagram"];
let gmail = document.getElementById("Gmail");

for (const language of languages) {
  let l = document.getElementById(language);
  l.onclick = () => {
    switch (language) {
      case "JavaScript":
        window.open("https://www.w3schools.com/js/");
      case "CPP":
        window.open("https://www.w3schools.com/cpp/");
      case "CSharp":
        window.open("https://learn.microsoft.com/en-us/dotnet/csharp/");
    }
  };
  l.onmouseenter = () => {
    l.classList.add("HoverScale");
    l.classList.remove("NotHoverScale");
  };
  l.onmouseleave = () => {
    l.classList.add("NotHoverScale");
    l.classList.remove("HoverScale");
  };
}

for (const socialMedia of socialMedias) {
  let s = document.getElementById(socialMedia);
  if (s) {
    s.onclick = () => {
      switch (socialMedia) {
        case "X":
          window.open("https://x.com/TheWhiteThaer");
        case "Youtube":
          window.open(
            "https://www.youtube.com/channel/UC_yAalS8t5e8JT0u9434Ygw"
          );
      }
    };
    s.onmouseenter = () => {
      s.classList.add("HoverScale");
      s.classList.remove("NotHoverScale");
    };
    s.onmouseleave = () => {
      s.classList.add("NotHoverScale");
      s.classList.remove("HoverScale");
    };
  }
}

gmail.onclick = () => {
  window.open(
    "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWstwNRQGhTmbDfmrrgkfNmmqnBCbzNwZqqwFJzlPRNBVKVCBHnCFZhSRWRrMBRmpkrWMkWmB"
  );
};

gmail.onmouseenter = () => {
  gmail.classList.add("HoverScale");
  gmail.classList.remove("NotHoverScale");
};
gmail.onmouseleave = () => {
  gmail.classList.add("NotHoverScale");
  gmail.classList.remove("HoverScale");
};
