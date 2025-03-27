// Função construtora
function Pessoa(nome, sobrenome) {

    const ID = 1234456;
    const metodoInterno = function () {

    };

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log(this.nome + ': Sou um método');
    };
}


const p1 = new Pessoa('Matheus', 'Martins');
