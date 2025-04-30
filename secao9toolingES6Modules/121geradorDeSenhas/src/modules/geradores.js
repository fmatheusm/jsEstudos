const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 90));
const geraMinusculas = () => String.fromCharCode(rand(97, 122));
const geraNUmeros = () => String.fromCharCode(rand(48, 57));
const simbolos = ',.;:~^[]{}!@#$%&*()_+=-<>?/\|';
const geraSimbolos = () => simbolos[rand(0, simbolos.length - 1)];

export default function geraSenha(qtd, maiuscula, minusculas, numeros, simbolos) {
    const senhaArray = [];
    qtd = Number(qtd);

    for (let i = 0; i < qtd; i++) {
        maiuscula && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.push(geraMinusculas());
        numeros && senhaArray.push(geraNUmeros());
        simbolos && senhaArray.push(geraSimbolos());
    }

    return senhaArray.join('').slice(0, qtd);
}