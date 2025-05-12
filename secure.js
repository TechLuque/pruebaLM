const status = document.getElementById("status");
const sesion = localStorage.getItem("sesionIniciada");
const correo = localStorage.getItem("correo");

if (sesion === "true" && correo) {
  status.innerText = `Sesión activa para: ${correo}`;
} else {
  // Redirigir si no hay sesión
  window.location.href = "index.html";
}
