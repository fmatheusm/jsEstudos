const produto = { nome: 'Produto', preco: 1.8 };
console.log(Object.values(produto));
console.log(Object.entries(produto));

for (const entry of Object.entries(produto)) {
    console.log(entry);
}

for (const [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}
