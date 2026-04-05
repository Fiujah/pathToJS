let frutas = ["maçã", "melão", "manga"];

console.log(frutas.includes("manga"));
console.log(frutas.includes("kiwi"));

console.log(frutas.every(
    function(fruta) {
        return fruta.includes("ma"); // includes olha apenas para a primeira ocorrencia
    }
));

console.log(frutas.some(
    function(fruta) {
        return fruta.includes("ma"); // includes olha apenas para a primeira ocorrencia
    }
));

console.log(frutas.join("-"))