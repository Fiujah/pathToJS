const pessoa = {
    falar: function () { console.log("Olá")}
}

const joao = Object.create(pessoa);
joao.falar();

console.log(pessoa.hasOwnProperty("falar"))