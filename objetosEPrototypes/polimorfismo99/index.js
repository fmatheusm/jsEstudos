function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        console.log(`Saldo insuficiente: R$${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function (valro) {
    this.saldo += valro;
    this.verSaldo();
};
Conta.prototype.verSaldo = function () {
    console.log(`Ag/c ${this.agencia}/${this.conta} Saldo: R$${this.saldo.toFixed(2)}`);
};

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype); // link prototype da conta com a conta corrente
ContaCorrente.prototype.constructor = ContaCorrente;//Retornando o construtor
// método sacar sobre escrito
ContaCorrente.prototype.sacar = function (valor) {
    if ((this.saldo + this.limite) < valor) {
        console.log(`Saldo insuficiente: R$${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

function ContaPoupanca(agencia, conta, saldo,) {
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype); // link prototype da conta com a conta corrente
ContaPoupanca.prototype.constructor = ContaPoupanca;//Retornando o construtor
console.log('#Conta Corrente#');
const cc = new ContaCorrente(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(110);
cc.sacar(.01);
console.log('#Conta Poupança#');
const cp = new ContaPoupanca(11, 22, 0);
cp.depositar(10);
cp.sacar(110);
cp.sacar(.01);