const produto = { nome: 'Produto', preco: 1.8 };
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Caneca'
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
produto.nome = 'Outro nome';
delete produto.nome;
console.log(produto);
