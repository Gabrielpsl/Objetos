const cliente = {
    nome: "Andre",
    idade: "32",
    cpf: "11112222333",
    email: "email@email.com",
}

console.log(`O nome dessa pessoa é ${cliente.nome}  e tem ${cliente.idade} anos de idade, e seus 3 primeiro digitos do CPF são ${cliente.cpf.substring(0, 3)}`)