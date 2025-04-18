const produto = { nome: 'Caneca', preco: 1.8 };
// const outraCoisa = produto; // aponta para o mesmo local em memória
const outraCoisa = { ...produto, material: '' }; // dessa forma as variáveis ficam independentes 



produto.preco = '2.5';
outraCoisa.nome = 'lápis';
outraCoisa.material = 'madeira';
console.log(produto);
console.log(outraCoisa);

// Object.assign

const produto2 = { nome: 'Caneca', preco: 1.8 };
const outraCoisa2 = Object.assign({}, produto2, { material: 'madeira' });
produto2.preco = '2.5';
outraCoisa2.nome = 'lápis';
console.log(produto2);
console.log(outraCoisa2);