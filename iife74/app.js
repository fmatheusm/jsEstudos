//IIFE -> Immediately invoked function expression
(function (idade, peso, altura) {
    const nome = 'Matheus';
    function criaNome(sobrenome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Martins'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80);

const nome = 'Qualquer coisa.'