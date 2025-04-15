const objA = {
    chaveA: 'A'
}
const objB = {
    cachveB: 'B'
}

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

console.log(objC);