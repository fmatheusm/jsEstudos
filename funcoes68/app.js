// quando declarado com function ocorre o hoisting
function falaOi() {
    console.log('Oi!')
}

// function expression
const souUmDado = function () {
    console.log('Sou um dado.');
}

function executaFuncao(funcao) {
    funcao();
}

executaFuncao(souUmDado);

// Arrow function

const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}
funcaoArrow();

//dentro de um objeto

const obj = {
    falar: function () {
        console.log('Hello World!');
    }
};

obj.falar();

// forma mais atual

const obj2 = {
    falar() {
        console.log('Hello World!');
    }
};

obj2.falar();