function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    //let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,// mostra a chave
        configurable: false, // configurável
        get: () => estoque,
        set: valor => {
            if (typeof valor !== 'number') {
                console.log('Bad value');
                return;
            }
            // estoquePrivado = valor;
            estoque = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
delete p1.estoque;
p1.estoque = 5000;
console.log(p1);
p1.estoque = 60;
console.log(p1.estoque);
