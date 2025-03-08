let num1 = 10.25;
let num2 = 2.5;

console.log(num1.toString() + num2);
console.log(typeof num1);
console.log(num1.toFixed(2));
num1 = num1.toString();
console.log(typeof num1);
console.log(num1.toString(2));
console.log(Number.isInteger(num1));
let temp = num1 * 'olá';
console.log(Number.isNaN(temp));

// precisão do js em contas matemáticas IEEE 754-2008
let num3 = 0.7;
let num4 = 0.1;

num3 += num4; // retorna 0.7999999999999999
num3 += num4; // retorna 0.8999999999999999
num3 += num4; // retorna 0.9999999999999999
num3 += num4 // 

// para resolver utilizar parseFloat/Number e toFixed

num3 = parseFloat(num3.toFixed(2)); // Number(num3.toFixed(2))

console.log(Number.isInteger(num3));
console.log(num3);

// resolvendo o problema com conta

let num5 = 0.7;
let num6 = 0.1;

num5 = ((num5 * 100) + (num6 * 100)) / 100
num5 = ((num5 * 100) + (num6 * 100)) / 100
num5 = ((num5 * 100) + (num6 * 100)) / 100

console.log(num5)