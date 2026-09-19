/* TROCAR PARA CADASTRO */
const mostrarCadastro = document.getElementById("mostrar-cadastro");
const mostrarLogin = document.getElementById("mostrar-login");
const login = document.getElementById("login");
const cadastro = document.getElementById("cadastro");

if (mostrarCadastro) {
    mostrarCadastro.addEventListener("click", function (event) {
        event.preventDefault();
        login.style.display = "none";
        cadastro.style.display = "block";
    });
}

/* TROCAR PARA LOGIN */
if (mostrarLogin) {
    mostrarLogin.addEventListener("click", function (event) {
        event.preventDefault();
        cadastro.style.display = "none";
        login.style.display = "block";
    });
}
