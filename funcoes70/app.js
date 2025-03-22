function soma(a, b) {
    return a + b;
}

function soma2(a, b) {
    console.log(a + b);
}

// document.addEventListener('click', function () {
//     document.body.style.background = 'red';
// });


function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome
    };
}

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }

    return falaResto;
}

const olaMundo = falaFrase('Hello');
console.log(olaMundo('world'));

const fala = falaFrase('Ola');
const resto = fala('mundo');
console.log(resto);