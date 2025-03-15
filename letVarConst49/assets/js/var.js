const verdadeira = true;

// let tem escopo de bloco { ... bloco }
// var só tem escopo de função

// function fala() {
//     var nome = 'Matheus';
// }

// console.log(nome);
// fala();//erro nome is not defined

var sobrenome = 'Fernandes';

function fala() {
    console.log(sobrenome);
}

fala();// Fernandes