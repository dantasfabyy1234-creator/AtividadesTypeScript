// 1. Crie um programa que peça números até o usuário digitar 0 e mostre:
//  Quantidade de números digitados
//  Soma total

let contNum = 0
let somaNum = 0

let num:number = 0

while( num != 0 ){
    num = Number(prompt("Digite um número, ou digite 0 para encerrar: "))
    
    contNum = contNum + 1
    somaNum = somaNum + num
}

console.log(contNum)
console.log(somaNum)