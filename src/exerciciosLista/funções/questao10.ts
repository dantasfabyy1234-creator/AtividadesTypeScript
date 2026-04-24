// 10. Calculadora de IMC com Classificação.
// Um personal trainer precisa de uma ferramenta para avaliar seus alunos.

//  Função calcular_imc(peso, altura): Retorna o resultado da fórmula IMC = peso/altura².

//  Função classificar_imc(valor_imc): Recebe o IMC e retorna uma string:
// o Abaixo de 18.5: "Abaixo do peso"
// o Entre 18.5 e 24.9: "Peso Normal"
// o 25 ou mais: "Sobrepeso"

//  Função exibir_laudo(nome, classificacao): Imprime: "Paciente: [nome] - Status:
// [classificacao]".
//  Uso: Peça o nome, peso e altura, processe os dados e exiba o laudo.


let imc =0
function calcular_imc():number{
     peso = Number(prompt("Informe seu peso: "))
     altura = Number(prompt("Informe sua altura: "))
     nome = 

     imc = peso/(altura*altura)
     return imc
}
let classificacao = classificar_imc(imc)

function classificar_imc(imc:number){
    if(imc < 18.5){
        console.log("Abaixo do peso")
    }
    else if(imc >= 18.5 && imc <= 24.9){
        console.log("Peso Normal")
    }
    else{
        console.log("sobrepeso")
    }
}
function exibir_laudo (nome:string, classificacao:number){

}