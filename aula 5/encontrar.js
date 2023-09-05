const clientes = require("./clientes.json")

// function encontrar(li, key, value) {
//     return li.find((item) => item [key] === value);
// }

function encontrar(li, key, value) {
    return li.find((item) => item [key].includes(value));
}


const encontrado = encontrar(clientes, "nome", "Kirby");
const encontrado2 = encontrar(clientes, "telefone", "1918820860" )

console.log(encontrado2);