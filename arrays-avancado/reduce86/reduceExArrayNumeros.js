const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//Some todos os números
const total = numeros.reduce(function (acumulador, valor, index, array) {
    acumulador += valor;
    return acumulador;
}, 0)
console.log(total);

//Retorne uma array com os pares
const numerosPares = numeros.reduce((acumulador, valor) => {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, [])
console.log(numerosPares);

//Retorne um array com o dobro dos valores (Map)
const dobro = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor * 2);
    return acumulador;
}, [])
console.log(dobro);

//somando apenas os numeros pares 
const pares = numeros.reduce(function (acumulador, valor, index, array) {
    if (valor % 2 === 0) acumulador += valor;
    return acumulador;
}, 0)
console.log(pares);