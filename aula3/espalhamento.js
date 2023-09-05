const cliente = {
    nome:"João",
    idade: "24",
    email: "joão@email.com",
    telefone: ["99999999999","111111111111"]
};

cliente.endereco = [
     {
    rua: "R. Alameda Slin",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
}
]

function ligaParaCliente (telefoneComercial, telefoneResidencial) {
    console.log(`ligando para ${telefoneComercial}`);
    console.log(`ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.endereco[0],
    // rua: cliente.endereco[0].rua,
    // numero: cliente.endereco[0].numero,
    
}

console.log(encomenda)