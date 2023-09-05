const clientes = require("./clientes.json");

function filtarApartamentoSemComplemento(clientes) {
    return clientes.filter((cliente) => {
        return(
            cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complemento")
        );
    });
   
}

const filtrados = filtarApartamentoSemComplemento(clientes);

console.log(filtrados);




