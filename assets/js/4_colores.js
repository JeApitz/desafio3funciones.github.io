let elemento1 = document.getElementById("contenedor-1"),
  elemento2 = document.getElementById("contenedor-2"),
  elemento3 = document.getElementById("contenedor-3"),
  elemento4 = document.getElementById("contenedor-4");

function color(elem) {
  elem.style.backgroundColor = "black";
}

elemento1.addEventListener("click", () => {
  color(elemento1);
});

elemento2.addEventListener("click", () => {
  color(elemento2);
});

elemento3.addEventListener("click", () => {
  color(elemento3);
});

elemento4.addEventListener("click", () => {
  color(elemento4);
});
