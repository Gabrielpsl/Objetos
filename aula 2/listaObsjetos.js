const cliente = {
    nome:"João",
    idade: "24",
    email: "joão@email.com",
    telefone: ["99999999999","111111111111"]
};

cliente.endereco = [
     {
    rua: "R. Joseph Cliente",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
}
]

// adicionando um novo objeto ao enderenços

cliente.endereco.push({
    rua: "Alameda slin",
    numero: "400",
    apartamento: "false"
});

console.log(cliente.endereco);

// mosrtar apenas endereços que são apartamentos

const listaApenasApartamentos = cliente.endereco.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);