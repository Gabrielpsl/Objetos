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


// fazem a mesma coisa de formas diferentes.

const chavesDoObjeto = Object.keys(cliente)

console.log(chavesDoObjeto);

// for (let key in cliente) {
//     console.log(key)
// }

// caso não haja endereços cadrastrados aparecera um erro.

if (!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro. É nessessário ter um endereço cadastrado.")
}
