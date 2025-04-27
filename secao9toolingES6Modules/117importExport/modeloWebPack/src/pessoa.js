export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    getNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

export const nome = 'Juliana';
export const sobrenome = 'Mendes';
export const idade = 25;