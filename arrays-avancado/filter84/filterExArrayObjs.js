const pessoas = [
    { nome: 'Lucas', idade: 25 },
    { nome: 'Ana', idade: 30 },
    { nome: 'Carlos', idade: 28 },
    { nome: 'Maria', idade: 22 },
    { nome: 'Pedro', idade: 35 },
    { nome: 'Julia', idade: 27 },
];

// Retornar pessoas que tem o nome com 5 letras ou mais
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeGrande);

//Retornar pessoas com mais de 29 anos
const pessoasComMaisDe29Anos = pessoas.filter(obj => obj.idade >= 29);
console.log(pessoasComMaisDe29Anos);

//Retornar pessoas cujo nome termine com aletra a
// const pessoasComNomeTerminadoEmA = pessoas.filter(obj => obj.nome[obj.nome.length - 1] === 'a');
const pessoasComNomeTerminadoEmA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(pessoasComNomeTerminadoEmA);

