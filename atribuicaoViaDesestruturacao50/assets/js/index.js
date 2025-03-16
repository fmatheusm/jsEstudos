// ...(três ponto) rest operator, ...(três pontos) spread operator

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [um, dois, tres, ...resto] = numeros;

console.log(um, dois, tres);
console.log(resto);

const listaNumero = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [, [, , seis]] = listaNumero; // capturando numero 6 forma muito complexa

console.log(seis);

const [lista1, lista2, lista3] = listaNumero;
console.log(lista2[2]); // melhor forma para capturar os elementos do array 