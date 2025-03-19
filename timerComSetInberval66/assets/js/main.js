const relogio = document.querySelector('.relogio');
const buttonIniciar = document.querySelector('.iniciar');
const buttonPausar = document.querySelector('.pausar');
const buttonZerar = document.querySelector('.zerar');

let segundos = 0;
let timer;


buttonIniciar.addEventListener('click', (event) => {
    clearInterval(timer);
    iniciaRelogio();
    relogio.classList.remove('pausado')
});
buttonPausar.addEventListener('click', (event) => {
    clearInterval(timer);
    relogio.classList.add('pausado');
});
buttonZerar.addEventListener('click', (event) => {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00'
    segundos = 0;
    relogio.classList.remove('pausado')
});

function cronometro(segundos) {
    let data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: 'UTC'
    });
}

function iniciaRelogio() {
    timer = setInterval(() => {
        segundos++;
        relogio.innerHTML = cronometro(segundos);
    }, 1000);
}