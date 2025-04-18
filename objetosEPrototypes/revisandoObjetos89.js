const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Oliveira'
};

const pessoa1 = new Object();
pessoa1.nome = 'Maria';
pessoa1.sobrenome = 'Silva';
pessoa1.idade = 32;
pessoa1.falarNome = function () {
    return `Meu nome é ${this.nome}`;
};

pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.getDataNascimento())

//factory functions
function ciraPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = ciraPessoa('Matheus', 'Martins');
console.log(p1.nomeCompleto);

function Humano(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const h1 = new Humano('José', 'Bento');
const h2 = new Humano('Juan', 'Felix');

console.log(h1);