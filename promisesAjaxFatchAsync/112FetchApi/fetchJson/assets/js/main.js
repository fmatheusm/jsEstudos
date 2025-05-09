fetch('pessoas.json')
    .then(response => response.json())
    .then(json => carregaJsonNaPagina(json));

function carregaJsonNaPagina(json) {
    const table = document.createElement('table');
    for (const pessoa of json) {
        const tr = document.createElement('tr');

        const td1 = document.createElement('td');
        td1.innerHTML = pessoa.nome;
        tr.appendChild(td1);

        const td2 = document.createElement('td')
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2);

        const td3 = document.createElement('td')
        td3.innerHTML = pessoa.salario;
        tr.appendChild(td3);

        table.appendChild(tr);

        const resultado = document.querySelector('.resultado');
        resultado.appendChild(table);
    }
}