const pessoas = [
    { nome: 'Lucas', idade: 25 },
    { nome: 'Ana', idade: 30 },
    { nome: 'Carlos', idade: 28 },
    { nome: 'Maria', idade: 22 },
    { nome: 'Pedro', idade: 35 },
    { nome: 'Julia', idade: 27 },
];

//Para cada elemento:
//Retorne apenas uma string com o nome da pessoa
const nomeString = pessoas.map(obj => obj.nome);
console.log(nomeString);

//Remova apenas a chave nome do objeto
const idades1 = pessoas.map(obj => ({ idade: obj.idade }));
console.log(idades1);
// const idades2 = pessoas.map(obj => {
//     delete obj.nome;
//     return obj;
// });
// console.log(idades2);

//Adicione uma chave ID em cada objeto
const comIds = pessoas.map((obj, id) => {
    const newObj = { ...obj };
    newObj.id = id;
    return newObj;
});
console.log(comIds);