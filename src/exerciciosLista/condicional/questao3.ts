// 3. Crie um programa que solicite dois números e simule um menu de uma calculadora:
// 1 - Soma
// 2 - Subtração
// 3 - Multiplicação
// 4 - Divisão
// Use switch...Case

let num1:number = Number(prompt("Informe o primeiro número: "))
let num2:number = Number(prompt("Informe o segundo número: "))
let op:number = Number(prompt("Escolha a opção, sendo: 1-Soma, 2-Subtracao, 3-Multiplicação, 4-Divisão: "))

switch(op){
    case 1:
        let soma = num1+num2
        console.log(soma)
    break
    case 2:
        let Subtracao = num1-num2
        console.log(Subtracao)
    break
    case 3:
        let Multiplicacao = num1 * num2
        console.log(Multiplicacao)
    break
    case 4: 
        let divisao = num1 / num2
        console.log(divisao)
    break
    default:
        console.log("opcão inválida. ")
}

