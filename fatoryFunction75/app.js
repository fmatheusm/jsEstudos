//factory function (função fabrica)

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala(assunto) {
            return `${nome} está ${assunto}`
        },
        altura: a,
        peso: p,

        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Matheus', 'Martins', 1.8, 80);
p1.nomeCompleto = 'Maria Oliveira Silva'
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);


const pessoa1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
const pessoa2 = criaPessoa('João', 'Oliveira', 1.9, 50);
const pessoa3 = criaPessoa('Sandy', 'Junior', 1.5, 110);

console.log(pessoa1.imc);
console.log(pessoa2.imc);
console.log(pessoa3.imc);