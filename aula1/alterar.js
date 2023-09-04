const pessoa = {
    nome: "Luma",
    profissao: "engenheira",
};

console.log(pessoa.nome);

console.log(pessoa.telefone);

// ira aparecer o nome da pessoa e em seguida aparecerá "indefinido"

pessoa.telefone = "11122233344" 

console.log(pessoa.telefone);

// agora aparecera o numero telefone

pessoa.nome ="Luma Silva"

console.log(pessoa);

// note que o nome foi alterado.