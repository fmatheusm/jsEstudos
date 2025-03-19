function relogio() {
    const relogio = document.querySelector('.relogio');

    let segundos = 0;
    let timer;

    document.addEventListener('click', (e) => {
        const el = e.target;

        if (el.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
            relogio.classList.remove('pausado');
        }

        if (el.classList.contains('iniciar')) {
            clearInterval(timer);
            iniciaRelogio();
            relogio.classList.remove('pausado');
        }

        if (el.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }
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
}

relogio();