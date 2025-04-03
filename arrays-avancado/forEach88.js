const a1 = [10, 20, 30];

a1.forEach((valor, indicie, array) => {
    console.log(valor, indicie, array);
});

let total = 0;
a1.forEach(valor => {
    total += valor;
});
console.log(total);