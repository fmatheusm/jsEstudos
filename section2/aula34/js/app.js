function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     alert(1);
    //     console.log('Foi enviado');
    // };
    // let contador = 1;
    // function recebeEventoForm(evento) {
    //     evento.preventDefault();
    //     console.log(`Form não foi enviado ${contador}.`);
    //     contador++;
    // }

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        // pessoas[pessoas.length] = [nome.value, sobrenome.value, peso.value, altura.value];
        pessoas.push(
            {
                nome: nome.value,
                sobrenome: sobrenome.value,
                peso: peso.value,
                altura: altura.value
            }
        )

        resultado.innerHTML = `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}<br/><p/>`;
        console.log(pessoas);
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();