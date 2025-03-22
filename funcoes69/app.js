function funcao() {
    console.log(arguments);
}

funcao('valor', 1, 2, 3, 4, 5, 6, 7, 8, 9,);

function soma() {
    let total = 0;
    for (const argumento of arguments) {
        total += argumento;
    }

    console.log(total);
}

soma(1, 2, 3, 4, 5, 6, 7);

function desestruturacao({ nome, sobrenome, idade }) {
    //também funciona para arrays [valor1, valor3]
    console.log(nome, sobrenome, idade);
}

let obj = {
    nome: "João",
    sobrenome: "silva",
    idade: 50
};

desestruturacao(obj);

function conta(operador, acumulador, ...numeros) {/*obs o rest operator precisar se o ultimo parâmetro */
    for (const numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}

conta('*', 1, 20, 30, 40, 50);
