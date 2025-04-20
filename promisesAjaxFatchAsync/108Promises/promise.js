function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('BAD VALUE');
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

espera('Conexão com o DB', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return espera('Buscando dados da Base', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return espera(2222/*'Tratando dados da Base'*/, rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('Exibindo dados na tela');
    })
    .catch(e => {
        console.log('ERRO:', e);
    });
