import GeraCpf from './modules/GeraCpf';
import './assets/css/style.css';

(function () {
    const geraCpf = new GeraCpf();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = geraCpf.geraNovoCpf();
})();