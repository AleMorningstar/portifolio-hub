function criaCard(dadosDoFormulario) {

    const card = document.createElement('article');

    card.classList.add('card-atividade');


    card.innerHTML = `
        <div class="card-topo">

            <span class="card-etiqueta">
                ATIVIDADE
            </span>

            <button
                class="botao-remover"
                type="button"
                aria-label="Remover atividade"
            >
                ×
            </button>

        </div>


        <h3>
            ${dadosDoFormulario.descricao}
        </h3>


        <div class="card-informacoes">

            <p>
                <span>Complexidade</span>
                <strong>${dadosDoFormulario.complexidade}</strong>
            </p>

            <p>
                <span>Entrega</span>
                <strong>${dadosDoFormulario.dataEntrega}</strong>
            </p>

        </div>
    `;


    const botaoRemover = card.querySelector('.botao-remover');

    botaoRemover.addEventListener('click', function () {

        card.remove();

        atualizarContador();

        verificarPainelVazio();

    });


    const listaAtividades =
        document.getElementById('lista-atividades');

    listaAtividades.appendChild(card);


    atualizarContador();

    verificarPainelVazio();
}



function salvarAtividade(event) {

    event.preventDefault();


    const descricao =
        document.getElementById('descricao').value.trim();

    const complexidade =
        document.getElementById('complexidade').value;

    const dataEntrega =
        document.getElementById('data-entrega').value;


    const mensagem =
        document.getElementById('mensagem');


    if (
        descricao === '' ||
        complexidade === '' ||
        dataEntrega === ''
    ) {

        mensagem.textContent =
            'Preencha todos os campos antes de salvar.';

        mensagem.classList.add('erro');

        return;
    }


    const dadosFormularioCadastroAtividade = {

        descricao: descricao,

        complexidade: complexidade,

        dataEntrega: formatarData(dataEntrega)

    };


    criaCard(dadosFormularioCadastroAtividade);


    document
        .querySelector('.cadastro-atividade')
        .reset();


    mensagem.textContent =
        'Atividade registrada com sucesso.';

    mensagem.classList.remove('erro');

    mensagem.classList.add('sucesso');


    setTimeout(function () {

        mensagem.textContent = '';

        mensagem.classList.remove('sucesso');

    }, 3000);

}



function formatarData(data) {

    const partes = data.split('-');

    return `${partes[2]}/${partes[1]}/${partes[0]}`;

}



function atualizarContador() {

    const quantidade =
        document.querySelectorAll('.card-atividade').length;

    const contador =
        document.getElementById('contador');


    if (quantidade === 0) {

        contador.textContent =
            '0 atividades';

    } else if (quantidade === 1) {

        contador.textContent =
            '1 atividade';

    } else {

        contador.textContent =
            `${quantidade} atividades`;

    }

}



function verificarPainelVazio() {

    const quantidade =
        document.querySelectorAll('.card-atividade').length;

    const estadoVazio =
        document.getElementById('estado-vazio');


    if (quantidade === 0) {

        estadoVazio.style.display = 'block';

    } else {

        estadoVazio.style.display = 'none';

    }

}



document
    .querySelector('.cadastro-atividade')
    .addEventListener('submit', salvarAtividade);


atualizarContador();

verificarPainelVazio();