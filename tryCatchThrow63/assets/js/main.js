function soma(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        throw new Error("x e y precisam ser números");
    }

    return x + y;
}

try {
    console.log(soma(5, 3));
    console.log(soma("5", 3));
} catch (error) {
    // console.log(error);
    console.log("mensagem mais amigável para o usuário");
}
