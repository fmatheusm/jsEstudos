const verdadeira = true;

// let tem escopo de bloco { ... bloco }
// var só tem escopo de função

let nome = 'João';
var nome2 = 'João';

var nome2 = 'Oliveira';

if (verdadeira) {
    let nome = 'Otávio';
    if (verdadeira) {
        let nome = 'outra coisa';
        console.log(nome, nome2);
    }
}