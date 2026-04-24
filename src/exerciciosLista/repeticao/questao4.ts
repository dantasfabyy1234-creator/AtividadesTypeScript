// 4. Faça um programa que leia um conjunto de números (X) e imprima a quantidade de
// números pares (QPares) e a quantidade de números ímpares (QImpares) lidos. Admita que o
// valor -1 é utilizado como sentinela para fim de leitura.

let contNumPares = 0
let contNumImpares = 0

let numeros:number = Number(prompt("Informe um número ou caso queira encerrar digite -1: "))

while(numeros != -1){
     if(numeros % 2 === 0){
        contNumPares++
     }
     else{
        contNumImpares++
     }

     numeros = Number(prompt("Informe um número ou caso queira encerrar digite -1: "))
}
console.log("A quantidade de números pares: "+ contNumPares +"<br>")
console.log("A quantidade de números impares: "+ contNumImpares)

