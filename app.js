

let amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();
  if (nombre === "") {
    alert("Por favor, ingrese un nombre válido.");
    return;
  }
  amigos.push(nombre);
  actualizarLista();
  input.value = "";
  input.focus();
}

function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  amigos.forEach(amigo => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Debe ingresar al menos un nombre antes de sortear.");
    return;
  }
  const indice = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indice];
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("amigo");
  if (input) {
    input.addEventListener("keyup", (e) => {
      if (e.key === "Enter") agregarAmigo();
    });
  }
});
