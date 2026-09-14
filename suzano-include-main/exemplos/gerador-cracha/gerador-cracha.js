function gerarCracha(nome, idade, cargo) {
    let mensagemCracha = `
        Nome: ${nome.toUpperCase()}
        Idade: ${idade} anos
        Cargo: ${cargo}
    `;
    console.log(mensagemCracha);
}

gerarCracha("Ana Paula", 28, "Desenvolvedora Front-end");