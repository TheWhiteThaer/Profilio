export function tween(Element, Properties, Duration, callBack) {}

export function Animate(FrameHeight, Frames, Image) {
  let frame = 0;
  setInterval(function () {
    const frameOffset = (++frame % Frames) * -FrameHeight;
    Image.style.backgroundPosition = "0px " + frameOffset + "px";
  }, 100);
}
