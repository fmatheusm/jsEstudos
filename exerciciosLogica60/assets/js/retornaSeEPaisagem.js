// Exercício com lógica de programação - 02
function ePaisagem(largura, altura) {
    return largura > altura ? true : false;
}

const ePaisagem2 = (largura, altura) => largura > altura;


console.log(ePaisagem(1920, 1080));
console.log(ePaisagem2(1080, 1920));