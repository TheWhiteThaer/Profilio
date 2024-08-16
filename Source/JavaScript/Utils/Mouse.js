export function OnMouse(Element, OnEnter, OnLeave) {
  Element.onmouseenter = OnEnter;
  Element.onmouseleave = OnLeave;
}

export function HoveringColorChange(El, OriginalColor, WantedColor) {
  OnMouse(
    El,
    () => {
      El.style["color"] = WantedColor;
    },
    () => {
      El.style["color"] = OriginalColor;
    }
  );
}
