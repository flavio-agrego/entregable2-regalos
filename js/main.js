const regalos = ["Licuadora", "Parlante", "Cafetera"];
let apodoUsuario = "";

// DOM
const formApodo = document.getElementById("form-apodo");
const listaRegalos = document.getElementById("lista-regalos");
const resultado = document.getElementById("resultado");

// Evento para capturar apodo
formApodo.addEventListener("submit", (e) => {
  e.preventDefault();
  apodoUsuario = document.getElementById("apodo").value.trim();
  if (apodoUsuario !== "") {
    mostrarListaRegalos();
    formApodo.classList.add("oculto");
  }
});

// Función para mostrar la lista de regalos
function mostrarListaRegalos() {
  listaRegalos.innerHTML = "<h2>Hola " + apodoUsuario + ", elegí un regalo:</h2>";
  regalos.forEach((regalo, index) => {
    const boton = document.createElement("button");
    boton.textContent = regalo;
    boton.addEventListener("click", () => elegirRegalo(regalo));
    listaRegalos.appendChild(boton);
  });
  listaRegalos.classList.remove("oculto");
}

// Función para manejar selección y guardar en LocalStorage
function elegirRegalo(regalo) {
  let eleccionesPrevias = JSON.parse(localStorage.getItem("elecciones")) || [];
  eleccionesPrevias.push({ apodo: apodoUsuario, regalo: regalo });
  localStorage.setItem("elecciones", JSON.stringify(eleccionesPrevias));

  mostrarResultado(regalo);
}

// Función para mostrar confirmación final
function mostrarResultado(regalo) {
  listaRegalos.classList.add("oculto");
  resultado.innerHTML = `<h2>Gracias ${apodoUsuario}</h2><p>Elegiste: <strong>${regalo}</strong></p>`;
  resultado.classList.remove("oculto");
}