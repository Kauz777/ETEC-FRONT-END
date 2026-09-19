let navegou = false;
let inicioY = 0;

/* TROCA DE PÁGINA */
function irParaLivros() {
    if (navegou) return;

    navegou = true;

    const transicao = document.querySelector(".page-transition");

    if (transicao) {
        transicao.classList.add("active");
    }

    setTimeout(function () {
        window.location.href = "./livros.html";
    }, 500);
}

/* MOUSE */
window.addEventListener("wheel", function (event) {
    if (event.deltaY > 0) {
        irParaLivros();
    }
}, { passive: true });

/* CELULAR */
window.addEventListener("touchstart", function (event) {
    inicioY = event.touches[0].clientY;
}, { passive: true });

window.addEventListener("touchend", function (event) {
    if (navegou) return;

    const fimY = event.changedTouches[0].clientY;

    if (inicioY - fimY > 30) {
        irParaLivros();
    }
}, { passive: true });
