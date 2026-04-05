// String - Sequência de caracteres
let string = "Olá Mundo!";
// [O][l][á][ ][M][u][n][d][o][!]
// [0][1][2][3][4][5][6][7][8][9]
// [1][2][3][4][5][6][7][8][9][10]

// string = string.toLocaleLowerCase()
// string = string.toLocaleUpperCase()
// string = string.slice(2)
// slice(start. end) Obs: start é obrigatória, segunda é opcional

// console.log(string)
i = 0
let novaString = ''
let stringSeparada = ''
while ( i <= string.length -1){
    novaString = novaString.concat(`[${i}]`)
    stringSeparada = stringSeparada.concat(`[${string[i]}]`)
    i +=1 
}
console.log(stringSeparada)
console.log(novaString)