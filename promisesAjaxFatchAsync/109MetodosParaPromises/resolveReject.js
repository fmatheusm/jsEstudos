function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('BAD VALUE');
            return;
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}

// function baixaPagina() {
//     const emCache = false;

//     if (emCache) {
//         return Promise.resolve('Pagina em cache');
//     } else {
//         return espera('Baixei a página', 3000);
//     }
// }

function baixaPagina() {
    const emCache = true;

    if (emCache) {
        return Promise.reject('Página em cache');
    } else {
        return espera('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO' + e));