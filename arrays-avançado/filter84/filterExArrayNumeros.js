// Filter -> Sempre retorna um array, cam a mesma quantidade elementos ou menos.
//Retornar os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 8, 7, 11, 15, 22, 27];
let mairoresQue10 = []

for (const indicie in numeros) {
    if (numeros[indice] > 10) {
        mairoresQue10[indicie] = numeros[indicie];
    }
}

numeros.forEach((valor, i) => {
    if (numeros[i] > 10) {
        mairoresQue10[i] = valor;
    }
});

function callbackFilter(valor, indicie, array) {
    return valor > 10;
}

let numerosFiltrados = numeros.filter(valor => valor > 10);

//forma só para melhor entendimento
// let numerosFiltrados = numeros.filter((valor, index, array) => {
//     console.log(valor, index, array);

//     return valor > 10;
// });

// console.log(mairoresQue10);
console.log(numerosFiltrados);