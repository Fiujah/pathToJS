const variavelA = 2;

// if ( variavelA === 2) {
//     console.log("condição verdadeira");
// }

// Truthy ( parece verdadeiro ) Falsy ( parece falso)
let valores_vazios = [ // esses são valores Falsy ( OBS: Tipo referência como (Objeto, Lista) mesmo que vazio não gera Falsy)
    0,
    "",
    null,
    undefined,
    false,
]
for (i in valores_vazios) {
    if (!valores_vazios[i]) {
        console.log(`Executei porque o valor ${valores_vazios[i]} continha um valor com cara de falso`)
    }
}