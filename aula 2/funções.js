const cliente = {
    nome:"João",
    idade: "24",
    email: "joão@email.com",
    telefone: ["99999999999","111111111111"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insificiente");
        }else {
            this.saldo -= valor;
            console.log(`pagamento realizado. Novo saldo: ${this.saldo}`)

        }
    }
};

// cliente.efetuaPagamento(250)

cliente.efetuaPagamento(70)

