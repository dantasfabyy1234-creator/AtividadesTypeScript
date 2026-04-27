// Controle de Estoque de Loja (Loop e Relatório)

// Faça um programa que gerencie a entrada de produtos em um estoque. O programa deve solicitar o
// preço unitário do produto e a quantidade comprada.

//  Crie uma função que recebe preço e quantidade. Se a quantidade for maior que 10 unidades,
// aplica 5% de desconto sobre o valor total daquele item. Retorna o valor final.

//  O programa deve repetir a solicitação até que o preço informado seja zero.

//  Ao encerrar, exiba o total geral investido no estoque e a média de preço dos produtos
// cadastrados.


let desconto = 0
let valorFinal = 0
let precoUnitario = 0
let totalInvestido = 0 
let media = 0
let quantidadeTotal = 0
let quantidade = 0

function entrada_da_compra(quantidade: number, precoUnitario: number):number{
    
    valorFinal = precoUnitario * quantidade
    if(quantidade > 10){
        desconto = 5/100 // 0.05
        valorFinal =  valorFinal - valorFinal * desconto
    }
    alert("Valor Final: "+valorFinal)
    return valorFinal
}


precoUnitario = Number(prompt("Informe o preco unitário do produto ou 0 para sair: "))

while(precoUnitario != 0){
    quantidade = Number(prompt("Informe a quantidade de produtos da compra: "))
   
    let result = entrada_da_compra(precoUnitario,quantidade)

    totalInvestido = totalInvestido + result

    quantidadeTotal = quantidadeTotal + quantidade
    media = totalInvestido / quantidadeTotal

    precoUnitario= Number(prompt("Informe o preco unitário do produto ou 0 para sair: "))


}
    
console.log("O total investido no estoque: "+totalInvestido)
console.log("A média de preços dos produtos cadastrados: "+ media)