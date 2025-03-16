const sectonContainer = document.querySelector('.container');

const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 1' },
    { tag: 'section', texto: 'Frase 4' },
]

function criaElement(elementos) {
    const element = document.createElement(elementos)
    return element;
}

function setElementHtml(elementos) {
    for (let i = 0; i < elementos.length; i++) {
        const obj = criaElement(elementos[i].tag);
        obj.innerHTML += elementos[i].texto;
        sectonContainer.appendChild(obj);
    }
}

setElementHtml(elementos);