const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];


for (const numero of numeros) {
    if (numero === 2) {
        console.log('Pulei o nmero 2');
        continue;
    }

    if (numero === 7) {
        console.log('Achei o número 7');
        break;
    }

    console.log(numero);
}

let i = 0;
while (i < numeros.length) {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o nmero 2');
        i++;
        continue;
    }

    if (numero === 7) {
        console.log('Achei o número 7');
        i++;
        break;
    }

    console.log(numero);
    i++;
}


// let j = 0;
// do {
//     let numero = numeros[j];

//     if (numero === 2) {
//         console.log('Pulei o nmero 2');
//         i++;
//         i++;
//         continue;
//     }

//     if (numero === 7) {
//         console.log('Achei o número 7');
//         i++;
//         break;
//     }

//     console.log(numero);
//     i++;
// } while (j < numeros.length);
