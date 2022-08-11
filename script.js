const container = document.getElementById("container");
const colors = [
  "#d1a954",
  "#e66000",
  "#0c48c2",
  "#bd9c6d",
  "#cf0cbc",
  "#a554d1",
  "#fa7fc3",
  "#66c48a",
  "#bdba6d",
  "#9abd6d",
  "#2e523a",
  "#79db99",
  "#79b5db",
  "#7984db",
  "#9279db",
  "#af79db",
  "#db79d4",
  "#db79ac",
  "#db8479",
];

const SHAPE = 600;

for (let i = 0; i < SHAPE; i++) {
  const shape = document.createElement("div");
  shape.classList.add("shape");
  shape.addEventListener("mouseover", () => setColor(shape));
  shape.addEventListener("mouseout", () => removeColor(shape));
  container.appendChild(shape);
}

function setColor(element) {
  const color = getRandomColor();

  element.style.background = color;
  element.style.boxShadow = "0 0 2px ${color}, 0 0 10px ${color}";
}

function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
