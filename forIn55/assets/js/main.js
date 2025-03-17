const frutas = ['Pera', 'Maçã', 'Uva'];

for (let i in frutas) {
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Martins',
    idade: 31
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}