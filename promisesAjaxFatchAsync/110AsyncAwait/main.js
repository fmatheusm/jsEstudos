function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('CAI NO ERRO');
            return;
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}

// espera('fase 1', rand(1, 3))
//     .then(resposta => {
//         console.log(resposta);
//         return espera('fase 2', rand(1, 3));
//     })
//     .then(resposta => {
//         console.log(resposta);
//         return espera('fase 3', rand(1, 3));
//     })
//     .then(resposta => {
//         console.log(resposta);
//         return resposta;
//     })
//     .then(resposta => {
//         console.log('Terminamos na fase: ' + resposta);
//     })
//     .catch(e => console.log(e));

async function executa() {
    try {
        const fase1 = await espera('Fase 1', rand());
        console.log(fase1);

        const fase2 = await espera('Fase 2', rand());
        console.log(fase2);

        const fase3 = await espera('Fase 3', rand());
        console.log(fase3);

        console.log(`Terminamos na fase: ${fase3}`);
    }
    catch (e) {
        console.log(e);
    }
}

executa();