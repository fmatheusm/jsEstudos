const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 90));
const geraMinusculas = () => String.fromCharCode(rand(97, 122));
const geraNUmeros = () => String.fromCharCode(rand(48, 57));
const simbolos = ',.;:~^[]{}!@#$%&*()_+=-<>';
const geraSimbolos = () => simbolos[rand(0, simbolos.length)];

console.log(geraSimbolos());