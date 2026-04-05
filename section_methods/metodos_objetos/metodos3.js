const produto ={
    nome: "laptop",
    preco: 2500,
    disponibilidade: true
};

Object.assign(produto, {emEstoque: 10}); // Add propriedades ao objeto assign(objetoOrigem, {nomeNovaPropriedade: valor})

Object.defineProperty(produto, "disponibilidade", {value: false}); // Modificar o valor de uma propriedade existente

console.log(produto);

const origem = {
    nome: "Carlos",
    idade: 30
}

const origem2 = {
    profissao: "Engenheiro",
    cidade: "São Paulo",    
}
const destino = {};
Object.assign(destino, origem, origem2);

console.log(destino);

delete destino.cidade; // deleta uma propriedade
console.log(destino);