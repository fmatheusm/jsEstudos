/* 
Dados Primitivos (Imutáreis) - string, number, boolean, undefined, null,
bigint, symbol - valores
*/

let nome = 'Matheus';
nome[0] = 'R' // não é possível alterar o valor contido nos indices da string apesar de ser parecido com um array
console.log(nome)

let a = 'A';
let b = a; // cópia. Os valores de tipos primitivos são copiados
console.log(a, b);

a = 'outra coisa';
console.log(a, b);

/*
Matheus
A A
outra coisa A 
*/

/* 
Dados por Referência (mutáveis) - Array, object, function
*/

let c = [1, 2, 3];
let d = c; // "d" está apontando para a mesma referencia de memoria de "c".
/*
Caso altera o valor de "c" o valor de "d" também será alterado.
A referência é passada podendo alterar o valor contido nela, "d" aponta para o mesmo local de memoria que "c"
para deixar o valor de "d" independente você pode fazer um spread d = [...c];
*/
console.log(`c: [${c}], d: [${d}]`);

c.push(4);

console.log(`c: [${c}], d: [${d}]`)

d.pop();

console.log(`d: [${d}]`)
console.log(`c: [${c}]`)

/*
c: [1,2,3], d: [1,2,3]
c: [1,2,3,4], d: [1,2,3,4]
d: [1,2,3]
c: [1,2,3]
*/

let e = [1, 2, 3];
let f = [...e];
let g = f

console.log(e, f) //[1, 2, 3 ] [ 1, 2, 3 ]

e.push(4);
console.log(e, f); // [ 1, 2, 3, 4 ] [ 1, 2, 3 ]

f.pop();
console.log(e, f); // [ 1, 2, 3, 4 ] [ 1, 2 ]

e.push('Matheus');
console.log(e, g); // [ 1, 2, 3, 4, 'Matheus' ] [ 1, 2 ]
