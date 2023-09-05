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

for (let key in cliente) {
    console.log(` A chave ${key} tem valor  ${cliente[key]}`)
}