// import { nome, sobrenome, idade, soma, Pessoa } from './modulo1';
// import * as meuModulo from './modulo1'; // importa tudo do modulo1 como um objeto
import qualquerNome, { nome, sobrenome, idade } from './modulo1'; // importa a função ou variável definida como padrão 
import Pessoa, { nome as nomePessoa, sobrenome as sobrenomePessoa } from './pessoa'; // importa a classe Pessoa e as variáveis nome e sobrenome


// console.log(nome, sobrenome, idade);
// console.log(soma(5, 10));

const pessoa = new Pessoa(nomePessoa, sobrenomePessoa); // cria uma nova instância da classe Pessoa
console.log(pessoa);
console.log(pessoa.getNomeCompleto());

// console.log(meuModulo);
console.log(qualquerNome(5, 10));
console.log(nome, sobrenome, idade);