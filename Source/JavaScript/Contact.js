let contacts = ["Whatsapp", "Facebook", "Instagram", "X", "Gmail"];

for (let index = 0; index < contacts.length; index++) {
  const element = document.getElementById(contacts[index]);
  element.onclick = () => {
    switch (contacts[index]) {
      case "Whatsapp":
        window.open("+963984518232");
      case "Instagram":
        window.open("https://www.instagram.com/thewhitethaer/");
      case "Facebook":
        window.open("https://www.facebook.com/Thaer Ayoub/");
      case "Gmail":
        window.open(
          "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWstwNRQGhTmbDfmrrgkfNmmqnBCbzNwZqqwFJzlPRNBVKVCBHnCFZhSRWRrMBRmpkrWMkWmB"
        );
      case "Twitter":
      case "X":
        window.open("https://x.com/TheWhiteThaer");
      case "Youtube":
        window.open("https://www.youtube.com/channel/UC_yAalS8t5e8JT0u9434Ygw");
    }
  };

  element.onmouseenter = () => {
    element.classList.add("HoverScale");
    element.classList.remove("NotHoverScale");
  };
  element.onmouseleave = () => {
    element.classList.add("NotHoverScale");
    element.classList.remove("HoverScale");
  };
}
