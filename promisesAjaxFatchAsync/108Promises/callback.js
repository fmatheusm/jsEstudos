function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo, cb) {
    setTimeout(() => {
        console.log(msg);
        if (cb) cb();
    }, tempo);
}

espera('Frase 1', rand(1, 3), function () {
    espera('Frase 2', rand(1, 3), function () {
        espera('Frase 3', rand(1, 3));
    });
});

