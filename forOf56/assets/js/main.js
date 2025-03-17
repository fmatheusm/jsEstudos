const nome = 'Matheus Martins';

// for (let valor in nome) {
//     console.log(nome[valor]);
// }

// for clássico - Geralmente com iteráveis(array ou strings)
// for in - Retorna o índice ou chave (array, strings ou objetos)
// for of - Retorna o valor em si (iteráveis, array ou strings)

const nomes = ['Matheus', 'Fernandes', 'Martins'];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

console.log('######');

for (const i in nomes) {
    console.log(nomes[i]);
}

console.log('######');

for (const nome of nomes) {
    console.log(nome);
}

console.log('###forEach###');

nomes.forEach(function (valor, indice, array) {
    console.log(valor, indice, array);
})