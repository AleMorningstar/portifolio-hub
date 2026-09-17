// ========================================
// MENU MOBILE
// ========================================

const botaoMenu = document.querySelector(".menu-mobile");
const menu = document.querySelector(".menu");
const linksMenu = document.querySelectorAll(".menu-mobile-links a");

if (botaoMenu && menu) {

    botaoMenu.addEventListener("click", function () {

        menu.classList.toggle("menu-aberto");

        const menuAberto = menu.classList.contains("menu-aberto");

        botaoMenu.setAttribute("aria-expanded", menuAberto);

    });

}

linksMenu.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("menu-aberto");

        botaoMenu.setAttribute("aria-expanded", "false");

    });

});


// ========================================
// SEÇÕES + MENU ATIVO
// ========================================

const secoes = document.querySelectorAll("section[id]");
const linksMenuSecoes = document.querySelectorAll(".menu-grupo a[href^='#']");


// ========================================
// FUNDOS DINÂMICOS
// ========================================

const fundosSecoes = {

    inicio: "img/background-hero.png",
    projetos: "img/background-projetos.png",
    tecnologias: "img/background-tecnologias.png",
    competencias: "img/background-competencias.png",
    sobre: "img/background-sobre.png",
    contato: "img/background-contato.png"

};

const fundo1 = document.querySelector(".fundo-1");
const fundo2 = document.querySelector(".fundo-2");

let fundoAtual = fundo1;
let proximoFundo = fundo2;

let ultimoFundo = "";
let temporizadorFundo = null;


// ========================================
// TROCAR FUNDO
// ========================================

function trocarFundo(secao) {

    const imagem = fundosSecoes[secao];

    if (!imagem) {
        return;
    }

    // Não faz nada se já estamos nessa seção
    if (secao === ultimoFundo) {
        return;
    }

    ultimoFundo = secao;


    // Cancela uma troca anterior, caso ainda esteja acontecendo

    if (temporizadorFundo) {
        clearTimeout(temporizadorFundo);
    }


    // Coloca a nova imagem na camada que está escondida

    proximoFundo.style.backgroundImage =
        `url("${imagem}")`;

    proximoFundo.style.opacity = "1";


    // Depois da transição,
    // esconde a camada antiga

    temporizadorFundo = setTimeout(function () {

        fundoAtual.style.opacity = "0";

        // Inverte as camadas

        const temporario = fundoAtual;

        fundoAtual = proximoFundo;
        proximoFundo = temporario;

        temporizadorFundo = null;

    }, 600);

}

// ========================================
// ATUALIZAR MENU + FUNDO
// ========================================

function atualizarMenuAtivo() {

    let secaoAtual = "";

    const estaNoFinal =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5;


    // Se chegou ao final da página,
    // considera a seção Contato como ativa
    if (estaNoFinal) {

        secaoAtual = "contato";

    } else {

        secoes.forEach(function (secao) {

            const distanciaTopo =
                secao.getBoundingClientRect().top;

            if (distanciaTopo <= 150) {

                secaoAtual = secao.id;

            }

        });

    }


    // Atualiza o menu
    linksMenuSecoes.forEach(function (link) {

        link.classList.remove("ativo");

        if (
            link.getAttribute("href") ===
            `#${secaoAtual}`
        ) {

            link.classList.add("ativo");

        }

    });


    // Atualiza o fundo
    trocarFundo(secaoAtual);

}


// Executa quando a página é rolada
window.addEventListener(
    "scroll",
    atualizarMenuAtivo
);


// Executa imediatamente ao carregar
atualizarMenuAtivo();


// ========================================
// ANIMAÇÃO DOS CARDS DE PROJETOS
// ========================================

const cardsProjetos =
    document.querySelectorAll(".projeto-card");

const observadorProjetos =
    new IntersectionObserver(function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("visivel");

            }

        });

    });


cardsProjetos.forEach(function (card) {

    observadorProjetos.observe(card);

});


// ========================================
// ANIMAÇÃO DAS TECNOLOGIAS
// ========================================

const tecnologias =
    document.querySelectorAll(".tecnologia");

const observadorTecnologias =
    new IntersectionObserver(function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("visivel");

            }

        });

    });


tecnologias.forEach(function (tecnologia) {

    observadorTecnologias.observe(tecnologia);

});


// ========================================
// ANIMAÇÃO DAS COMPETÊNCIAS
// ========================================

const competencias =
    document.querySelectorAll(".competencia");

const observadorCompetencias =
    new IntersectionObserver(function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("visivel");

            }

        });

    });


competencias.forEach(function (competencia) {

    observadorCompetencias.observe(competencia);

});


// ========================================
// ANIMAÇÃO DA SEÇÃO SOBRE
// ========================================

const elementosSobre =
    document.querySelectorAll(
        ".sobre-foto, .sobre-texto"
    );

const observadorSobre =
    new IntersectionObserver(function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("visivel");

            }

        });

    });


elementosSobre.forEach(function (elemento) {

    observadorSobre.observe(elemento);

});


// ========================================
// ANIMAÇÃO DA SEÇÃO CONTATO
// ========================================

const contato =
    document.querySelector("#contato");

if (contato) {

    const observadorContato =
        new IntersectionObserver(function (entradas) {

            entradas.forEach(function (entrada) {

                if (entrada.isIntersecting) {

                    contato.classList.add("visivel");

                }

            });

        });

    observadorContato.observe(contato);

}