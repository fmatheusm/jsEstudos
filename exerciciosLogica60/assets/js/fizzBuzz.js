// Exercício com lógica de programação - 03
function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 5 === 0) return 'Buzz';
    if (numero % 3 === 0) return 'Fizz';
    return numero;

}

console.log(fizzBuzz('a'));