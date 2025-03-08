const a = 0;
const b = null;
const c = 'false';// o valor de "C" será exibido pois é um string preenchida o que o JS avalia como true
const d = false;
const e = NaN;

console.log(a || b || c || d || e);