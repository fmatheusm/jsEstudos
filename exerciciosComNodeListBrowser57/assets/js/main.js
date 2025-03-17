const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body)
const backgroundColorBody = estilosBody.backgroundColor;


console.log(backgroundSection);

for (const p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = "#fff";
}