const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];

// nomes.splice(índice, delete, elem1, elem2, elem3);
// const removidos = nomes.splice(-2, 1);
// console.log(nomes, removidos);

const adicionados = nomes.splice(3, 0, 'Matheus');
console.log(nomes, adicionados);