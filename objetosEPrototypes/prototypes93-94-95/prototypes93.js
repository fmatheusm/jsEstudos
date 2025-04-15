function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => 'OBJPESSOA: ' + this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function () {
    return 'PROTOTYPE: ' + this.nome + ' ' + this.sobrenome;
};

const pessoa1 = new Pessoa('Tales', 'Silva');
const data = new Date();

console.dir(pessoa1);
console.dir(data);
