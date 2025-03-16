const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Martins',
    idade: 30,
    endereco: {
        rua: 'Tira dentes',
        numero: '311'
    }
}
// const { nome: n = 'Não existe', sobrenome, idade } = pessoa;
// console.log(n, sobrenome, idade);

const { endereco: { rua, numero }, endereco } = pessoa;
console.log(rua, numero, endereco);

// const { endereco: { rua: r, numero }, endereco } = pessoa;
// console.log(r, numero, endereco);

const { nome, ...resto } = pessoa;
console.log(nome, resto);