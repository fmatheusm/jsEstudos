import geraSenha from './geradores';

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const checkMaiusculas = document.querySelector('.chk-maiusculas');
const checkMinusculas = document.querySelector('.chk-minusculas');
const checkNumeros = document.querySelector('.chk-numeros');
const checkSimbolos = document.querySelector('.chk-simbolos');
const btnGerarSenha = document.querySelector('.gerar-senha');

export default () => {
    btnGerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gerar();
    });
};

function gerar() {
    const senha = geraSenha(
        qtdCaracteres.value,
        checkMaiusculas.checked,
        checkMinusculas.checked,
        checkNumeros.checked,
        checkSimbolos.checked
    );

    return senha || 'Nada selecionado';
}