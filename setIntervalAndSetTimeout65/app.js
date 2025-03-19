function mostrarHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-br', {
        hour12: false,
    });
}


const timer = setInterval(() => {
    console.log(mostrarHora());
}, 1000);

setTimeout(() => {
    clearInterval(timer);
}, 3000);


setTimeout(() => {
    console.log('Hello World!!!');
}, 5000);