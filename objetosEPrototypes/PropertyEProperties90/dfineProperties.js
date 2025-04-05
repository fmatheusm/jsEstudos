function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true,// mostra a chave
        value: estoque, // valor
        writable: true, // pode alterar o valor
        configurable: false // configurável
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,// mostra a chave
            value: nome, // valor
            writable: true, // pode alterar o valor
            configurable: true // configurável 
        },
        preco: {
            enumerable: true,// mostra a chave
            value: preco, // valor
            writable: true, // pode alterar o valor
            configurable: false // configurável
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
delete p1.estoque;
p1.estoque = 5000;
console.log(p1);
console.log(Object.keys(p1));
for (const key in p1) {
    console.log(key);
}