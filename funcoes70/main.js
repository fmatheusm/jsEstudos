// function duplica(n) {
//     return n * 2;
// }

// function triplica(n) {
//     return n * 3;
// }

// function quadruplica(n) {
//     return n * 4;
// }

// console.log(duplica(2));
// console.log(triplica(2));
// console.log(quadruplica(2));

// function criaMultiplicador(multiplicador) {
//     function mutiplicacao(n) {
//         return n * multiplicador;
//     }

//     return mutiplicacao;
// }

function criaMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador;
    };
}



const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadruplica(2));
