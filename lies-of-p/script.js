const backgrounds = document.querySelectorAll('.background');
const secoes = document.querySelectorAll('section[data-bg]');
const menuItens = document.querySelectorAll('.menu-item');

let backgroundAtual = 1;

const imagens = {
    1: 'img/bg-hero.jpeg',
    2: 'img/bg-krat.jpeg',
    3: 'img/bg-atmosfera.jpeg',
    4: 'img/bg-musica.jpeg',
    5: 'img/bg-lies-dlc.jpeg'
};

function trocarBackground(numero) {
    if (numero === backgroundAtual) {
        return;
    }

    const proximoBackground =
        backgrounds[0].classList.contains('ativo')
            ? backgrounds[1]
            : backgrounds[0];

    proximoBackground.style.backgroundImage =
        `url("${imagens[numero]}")`;

    proximoBackground.classList.add('ativo');

    backgrounds.forEach(function (background) {
        if (background !== proximoBackground) {
            background.classList.remove('ativo');
        }
    });

    backgroundAtual = numero;
}

function atualizarMenu(idSecao) {
    menuItens.forEach(function (item) {
        item.classList.remove('ativo');

        if (item.getAttribute('href') === `#${idSecao}`) {
            item.classList.add('ativo');
        }
    });
}

const observador = new IntersectionObserver(
    function (entradas) {
        entradas.forEach(function (entrada) {
            if (entrada.isIntersecting) {
                const numero = Number(entrada.target.dataset.bg);
                const idSecao = entrada.target.id;

                trocarBackground(numero);
                atualizarMenu(idSecao);
            }
        });
    },
    {
        threshold: 0.45
    }
);

secoes.forEach(function (secao) {
    observador.observe(secao);
});

const botoesMusica = document.querySelectorAll('.musica-botao');

botoesMusica.forEach(function (botao) {
    botao.addEventListener('click', function () {
        const musica = botao.closest('.musica');

        musica.classList.toggle('aberta');

        const aberta = musica.classList.contains('aberta');

        botao.setAttribute('aria-expanded', aberta);

        if (aberta) {
            botao.textContent = '−';
        } else {
            botao.textContent = '+';
        }
    });
});