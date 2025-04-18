class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} já ligado`);
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} já desligado`);
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temChip) {
        super(nome);
        this.temChip = temChip;
    }

    ligar() {
        console.log('Método ligar alterado');
    }

    falaOi() {
        console.log('Oi');
    }
}

const s1 = new Smartphone('Samsung', 'Preto', 's25 Ultra');
s1.ligar();
console.log(s1);

const t1 = new Tablet('Galaxy Tab s10 plus', true);
console.log(t1.ligado);
t1.ligar();
t1.falaOi();
console.log(t1);