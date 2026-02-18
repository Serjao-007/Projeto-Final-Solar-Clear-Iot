const senha = document.getElementById("senha");
const mostrarSenha = document.getElementById("mostrarSenha");

mostrarSenha.addEventListener("change", () => {
  senha.type = mostrarSenha.checked ? "text" : "password";
});
