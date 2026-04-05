// split(delimiter[, limite])
let texto = "maçã  banana   laranja         uvas";
// let frutas = texto.split(",", 3)
let frutas = texto.split(/\s+/) // expressão regular para fazer o split em qtd diferentes de espaços no texto

console.log(frutas);

//splice(indice, numerosDeItensRemover, item1)
frutas.splice()