// console.log('Matheus' && 0 && 'Maria'); // Retorna o valor onde encontrar falso
// console.log('Matheus' && true && 'Maria'); // Retorna o valor onde encontrar falso
// console.log('Matheus' && true && NaN); // Retorna o valor onde encontrar falso
// console.log('Matheus' && true && false); // Retorna o valor onde encontrar falso

/*
Valores FALSY
false -> literal
0
'', "", ``
null
undefined
NaN

Qualquer coisa diferente dos exemplos acima são avaliados em true
*/

// function falaOi() {
//     return 'Oi';
// }

// const vaiExecutar = 0;


// console.log(vaiExecutar && falaOi()) // só vai executar a função caso o valor de "vaiExecutar" for igual, algum elemento do Js retorne true

let corUsuario = null;
let corPadrao = corUsuario || 'preto';

console.log(corPadrao);

corUsuario = 'verde';
corPadrao = corUsuario || 'preto';

console.log(corPadrao);

corUsuario = 10;
corPadrao = corUsuario || 'preto';

console.log(corPadrao);