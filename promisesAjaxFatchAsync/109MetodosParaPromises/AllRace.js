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

//Promise.all Promise.race Promise.resolve Promise.reject

const promise = [
    // 'Primeiro valor',
    espera('Promise 1', 3000),
    espera('Promise 2', 500),
    espera('Promise 3', 1000),
    //espera(1000, 1000),
    // 'Outro valor'
];

// Promise.all(promise)
//     .then(valor => {
//         console.log(valor);
//     })
//     .catch(function (erro) {
//         console.log(erro)
//     });

Promise.race(promise)
    .then(valor => {
        console.log(valor);
    })
    .catch(function (erro) {
        console.log(erro)
    });