// 1. Mostre-me as seguintes listas, derivadas de: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// a) Números pares
// b) Números ímpares
// c) Todos os múltiplos de 2,3 e 4
// d) Lista reversa

const vetores = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let pares:number[] = []
let impares:number[] = []
let multiplos:number[] = []
let reversa:number[] = []

for(let i=0; i < vetores.length; i++){
    if(vetores[i] % 2 === 0){
        pares.push(vetores[i])
    }
    else{
        impares.push(vetores[i])
    }
    if(vetores[i] % 2 === 0 || vetores[i] % 3 === 0 || vetores[i] % 4 === 0){
        multiplos.push(vetores[i])
    }

    reversa = vetores.sort((a,b) => b-a)
}
console.log("Pares: "+pares)
console.log("Ímpares: "+impares)
console.log("Múltiplos: "+multiplos)
console.log("Lista inversa: "+reversa)
