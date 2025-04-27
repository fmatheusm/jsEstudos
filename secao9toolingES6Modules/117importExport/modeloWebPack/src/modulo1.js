// const nome = 'Lucas';
// const sobrenome = 'Lima';
// const idade = 25;

// function soma(x, y) {
//     return x + y;
// }

// export { nome, sobrenome, idade, soma as default };

export const nome = 'Lucas';
export const sobrenome = 'Lima';
export const idade = 25;

// export function soma(x, y) /* funcao definida como padrao */ {
//     return x + y;
// }

export default (x, y) => x * y; // funcao definida como padrao

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    getNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}