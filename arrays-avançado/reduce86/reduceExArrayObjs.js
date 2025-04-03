const pessoas = [
    { nome: 'Lucas', idade: 25 },
    { nome: 'Ana', idade: 30 },
    { nome: 'Carlos', idade: 28 },
    { nome: 'Maria', idade: 22 },
    { nome: 'Pedro', idade: 35 },
    { nome: 'Julia', idade: 27 },
];

// retorne a pessoa mais velha
const maisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);