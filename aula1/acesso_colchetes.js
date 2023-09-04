const cliente = {
    nome: "Andre",
    idade: "32",
    cpf: "11112222333",
    email: "email@email.com",
}

// console.log(`O nome dessa pessoa é ${cliente["nome"]}  e tem ${cliente["idade"]} anos de idade,`);

const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach((chave) =>{

    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);

})