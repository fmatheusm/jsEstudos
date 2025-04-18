const pessoas = [
    { id: 3, nome: 'Luiz' },
    { id: 2, nome: 'Maria' },
    { id: 1, nome: 'Helena' }
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas.get(3));

for (const [identifier, { id, nome }] of novasPessoas) {
    console.log(identifier, id, nome);
}

for (const pessoa of novasPessoas.keys()) /* pega apenas as chaves*/ {
    console.log(pessoa);
}
// 3
// 2
// 1

for (const pessoa of novasPessoas.values())/* pega apenas os valores*/ {
    console.log(pessoa);
}
// { id: 3, nome: 'Luiz' }
// { id: 2, nome: 'Maria' }
// { id: 1, nome: 'Helena' }