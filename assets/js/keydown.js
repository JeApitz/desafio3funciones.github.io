let a = "pink",
  s = "orange",
  d = "skyblue",
  q = "#572364",
  w = "#9b9b9b",
  e = "#462e01";

document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    color1();
  } else if (event.key === "s" || event.key === "S") {
    color2();
  } else if (event.key === "d" || event.key === "D") {
    color3();
  }
});

document.addEventListener("keydown", function (evento) {
  if (evento.key === "q" || evento.key === "Q") {
    agregarElemento(q);
  } else if (evento.key === "w" || evento.key === "W") {
    agregarElemento(w);
  } else if (evento.key === "e" || evento.key === "E") {
    agregarElemento(e);
  }
});

function color1() {
  let contenedor = document.getElementById("key");
  contenedor.style.backgroundColor = a;
}

function color2() {
  let contenedor = document.getElementById("key");
  contenedor.style.backgroundColor = s;
}

function color3() {
  let contenedor = document.getElementById("key");
  contenedor.style.backgroundColor = d;
}

function agregarElemento(color) {
  let cuadro = document.getElementById("contenedor");
  let nuevocuadro = document.createElement("div");
  nuevocuadro.style.width = "200px";
  nuevocuadro.style.height = "200px";
  nuevocuadro.style.backgroundColor = color;
  cuadro.appendChild(nuevocuadro);
}
