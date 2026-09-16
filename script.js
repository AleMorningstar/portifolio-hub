const botaoMenu = document.querySelector(".menu-mobile");
const menu = document.querySelector(".menu");
const linksMenu = document.querySelectorAll(".menu-mobile-links a");

botaoMenu.addEventListener("click", function () {
    menu.classList.toggle("menu-aberto");

    const menuAberto = menu.classList.contains("menu-aberto");

    botaoMenu.setAttribute("aria-expanded", menuAberto);
});

linksMenu.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("menu-aberto");

        botaoMenu.setAttribute("aria-expanded", "false");

    });

});


//rolagem das seções e menu acompanhando: 
const secoes = document.querySelectorAll("section[id]");
const linksMenuSecoes = document.querySelectorAll(".menu-grupo a[href^='#']");

function atualizarMenuAtivo() {

    let secaoAtual = "";

    const estaNoFinal =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5;

    if (estaNoFinal) {
        secaoAtual = "contato";
    } else {

        secoes.forEach(function (secao) {

            const distanciaTopo = secao.getBoundingClientRect().top;

            if (distanciaTopo <= 150) {
                secaoAtual = secao.id;
            }
        });
    }

    linksMenuSecoes.forEach(function (link) {

        link.classList.remove("ativo");

        if (link.getAttribute("href") === `#${secaoAtual}`) {
            link.classList.add("ativo");
        }
    });
}

window.addEventListener("scroll", atualizarMenuAtivo);

atualizarMenuAtivo();