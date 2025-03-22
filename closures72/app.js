// function retornaFuncao() {
//     const nome = 'Matheus';
//     return function () {
//         return nome;
//     }
// }

// const funcao = retornaFuncao();
// console.dir(funcao);


function retornaFuncao(nome) {
    return function () {
        return nome;
    }
}

const funcao = retornaFuncao('Matheus');
console.dir(funcao);

const funcao2 = retornaFuncao('theus');
console.dir(funcao2);

console.log(funcao(), funcao2());