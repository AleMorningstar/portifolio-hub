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

const cardsProjetos = document.querySelectorAll(".projeto-card");

const observadorProjetos = new IntersectionObserver(function (entradas) {

    entradas.forEach(function (entrada) {

        if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel");
        }

    });

});

cardsProjetos.forEach(function (card) {
    observadorProjetos.observe(card);
});

const tecnologias = document.querySelectorAll(".tecnologia");

const observadorTecnologias = new IntersectionObserver(function (entradas) {

    entradas.forEach(function (entrada) {

        if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel");
        }

    });

});

tecnologias.forEach(function (tecnologia) {
    observadorTecnologias.observe(tecnologia);
});

const competencias = document.querySelectorAll(".competencia");

const observadorCompetencias = new IntersectionObserver(function (entradas) {

    entradas.forEach(function (entrada) {

        if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel");
        }

    });

});

competencias.forEach(function (competencia) {
    observadorCompetencias.observe(competencia);
});

const elementosSobre = document.querySelectorAll(".sobre-foto, .sobre-texto");

const observadorSobre = new IntersectionObserver(function (entradas) {

    entradas.forEach(function (entrada) {

        if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel");
        }

    });

});

elementosSobre.forEach(function (elemento) {
    observadorSobre.observe(elemento);
});

const contato = document.querySelector("#contato");

const observadorContato = new IntersectionObserver(function (entradas) {

    entradas.forEach(function (entrada) {

        if (entrada.isIntersecting) {
            contato.classList.add("visivel");
        }

    });

});

observadorContato.observe(contato);