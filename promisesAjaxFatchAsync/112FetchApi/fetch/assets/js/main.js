// const request = obj => {

//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(obj.method, obj.url, true);
//         xhr.send();

//         xhr.addEventListener('load', () => {
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.responseText);
//             } else {
//                 reject(xhr.statusText);
//             }
//         });
//     });

// };

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

function carregaPagina(el) {
    const href = el.getAttribute('href');

    fetch(href)
        .then(response => {
            if (response.status !== 200) throw new Error('Erro 404!')
            return response.text()
        })
        .then(html => carregaResultado(html))
        .catch(e => console.log(e));


}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}