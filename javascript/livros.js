/* ANIMAÇÃO DOS LIVROS */
const livros = document.querySelectorAll(".book-card");

livros.forEach(function (livro) {
    livro.addEventListener("mouseenter", function () {
        livro.style.transform = "translateY(-4px)";
    });

    livro.addEventListener("mouseleave", function () {
        livro.style.transform = "";
    });
});

/* FILTROS VISUAIS */
const filtros = document.querySelectorAll(".library-tabs a");

filtros.forEach(function (filtro) {
    filtro.addEventListener("click", function () {
        filtros.forEach(function (item) {
            item.classList.remove("active");
        });

        filtro.classList.add("active");
    });
});

/* SCROLL SUAVE */
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(function (link) {
    link.addEventListener("click", function (event) {
        const destino = link.getAttribute("href");
        const elemento = document.querySelector(destino);

        if (!elemento) return;

        event.preventDefault();
        elemento.scrollIntoView({ behavior: "smooth" });
    });
});
