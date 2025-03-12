function calculaIMC() {
    const form = document.getElementById('form');
    const resultado = document.getElementById('resultado');


    function calcula(evento) {
        evento.preventDefault();
        let imc;
        const peso = Number(form.querySelector('#peso').value);
        const altura = Number(form.querySelector('#altura').value);
        imc = peso / (altura ** 2)
        let imcAredondado = imc.toFixed(2)
        if (imc < 18.5) {
            resultado.innerHTML = `IMC: ${imcAredondado}, abaixo do peso`
        } else if (imc >= 18.5 && imc <= 24.9) {
            resultado.innerHTML = `IMC: ${imcAredondado}, peso normal`
        } else if (imc >= 25 && imc <= 29.9) {
            resultado.innerHTML = `IMC: ${imcAredondado}, sobre peso`
        } else if (imc >= 30 && imc <= 34.9) {
            resultado.innerHTML = `IMC: ${imcAredondado}, obesidade 1`
        } else if (imc >= 35 && imc <= 39.9) {
            resultado.innerHTML = `IMC: ${imcAredondado}, obesidade 2`
        } else if (imc >= 40) {
            resultado.innerHTML = `IMC: ${imcAredondado}, obesidade 3`
        }
    }

    form.addEventListener('submit', calcula);
}

calculaIMC();