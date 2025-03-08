const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Oliveira',
    idade: 25,
    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando; Olá mundo!`)
    },
    falaIdade() {
        console.log(`A minha idade atual é ${this.idade}.`)
    },
    incrementaIdade() {
        this.idade++;
    }
};

pessoa.fala();
pessoa.falaIdade();
pessoa.incrementaIdade();
pessoa.falaIdade();

function criaPessoa(nome, sobreNome, idade)/*Parâmetros*/ {
    return {
        nome,
        sobreNome,
        idade
    };
}; /*função factory*/

const pessoa1 = criaPessoa('Matheus', 'Martins', '31')/*Argumentos*/;
const pessoa2 = criaPessoa('João', 'Teles', '31')/*Argumentos*/;
const pessoa3 = criaPessoa('Maria', 'Jose', '31')/*Argumentos*/;
const pessoa4 = criaPessoa('Thiago', 'Martins', '31')/*Argumentos*/;
const pessoa5 = criaPessoa('Luan', 'Silva', '31')/*Argumentos*/;

console.log(pessoa1.nome, pessoa2.nome)
console.log(pessoa3.nome, pessoa3.sobreNome, pessoa3.idade)