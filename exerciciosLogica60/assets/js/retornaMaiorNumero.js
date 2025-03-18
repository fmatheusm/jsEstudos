// 60. Exercício com lógica de programação 01

function maior(x, y) {
    return x > y ? x : y;
}

console.log(maior(4, 5));
console.log(maior(10, 5));


function max(x, y) {
    if (x > y) return x;// o js para no comando return e não executa o restante do código abaixo dentro da função
    return y;
}

const max2 = (y, x) => x > y ? x : y;

console.log(max2(4, 5));
console.log(max2(10, 5));