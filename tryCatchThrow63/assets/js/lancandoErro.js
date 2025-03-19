// try {
//   // console.log(a);
//   console.log("Abri um arquivo");
//   console.log("manipulei o arquivo e gerou erro");
//   console.log("fechei o arquivo");

//   try {
//     console.log(b);
//   } catch (error) {
//     console.log("deu erro");
//   } finally {
//     console.log("Também sou finally");
//   }
// } catch (error) {
//   console.log("tratando erro");
// } finally {
//   console.log("eu sempre sou executado");
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString("pt-br", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: '2-digit'
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(data);
    console.log(hora);
} catch (error) {
    //tratar erro
    //console.log(error);
} finally {
    console.log('Tenha um bom dia');
}
