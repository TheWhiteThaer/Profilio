export function Random(min, max, floor) {
  let random = 0;
  floor
    ? (random = Math.floor(Math.random() * max + min))
    : (random = Math.random() * max + min);
  return random;
}
