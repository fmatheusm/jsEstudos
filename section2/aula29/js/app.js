const alunos = ['Luiz', 'maria', 'joão'];
alunos[3] = 'Luíza'
alunos.push('Fábio')
alunos.unshift('Matheus');
const removidoNoFinal = alunos.pop();
const removidoNoComeco = alunos.shift();
delete alunos[1]
console.log(alunos);
console.log(alunos.length);
console.log(removidoNoFinal);
console.log(removidoNoComeco);
console.log(alunos instanceof Array);