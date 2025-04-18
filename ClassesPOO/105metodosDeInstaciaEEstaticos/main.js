class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    // métodos de instância
    aumentarVolume() {
        this.volume++;
    }

    diminuirVolume() {
        this.volume--;
    }
    // método estático
    static trocarPilha() {
        console.log('Ok, vou trocar');
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
ControleRemoto.trocarPilha();
console.log(controle1);