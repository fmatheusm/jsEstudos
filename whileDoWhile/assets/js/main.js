function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

let min = 1, max = 50;

let rand = 10;


while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}
console.log('#####');

do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);// Por que o do while é executado? 