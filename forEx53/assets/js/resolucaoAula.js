
const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 1' },
    { tag: 'section', texto: 'Frase 4' },
];

const sectonContainer = document.querySelector('.container');
const div = document.createElement('div');

// for (let i = 0; i < elementos.length; i++) {
//     let { tag, texto } = elementos[i];
//     let elemento = document.createElement(tag)
//     elemento.innerHTML = texto;
//     div.appendChild(elemento);
// }

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let elemento = document.createElement(tag)
    let noDeTexto = document.createTextNode(texto);
    elemento.appendChild(noDeTexto);
    div.appendChild(elemento);
}

// for (let i = 0; i < elementos.length; i++) {
//     let { tag, texto } = elementos[i];
//     let elemento = document.createElement(tag)
//     elemento.innerText = texto;
//     div.appendChild(elemento);
// }

sectonContainer.appendChild(div);