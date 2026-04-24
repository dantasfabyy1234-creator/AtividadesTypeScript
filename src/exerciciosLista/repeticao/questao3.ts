// 3. Faça um programa que leia nome, horas trabalhadas, salário-hora e sexo de um grupo de
// operários. Ao final de cada solicitação pergunte se o usuário quer continuar ou não o
// programa.
// Calcule e imprima:
// ● Salário total dos funcionários, o maior salário, juntamente com o nome de quem o
// recebeu;
// ● O número de funcionários do sexo masculino e feminino cadastrado;
// ● O percentual de funcionários homens e mulheres cadastrados.

    let salarioFinal = 0
    let salarioTotalFuncionarios = 0

    let maiorSalario = 0
    let nomeMaiorSalario = ""

    let contMAsculino = 0
    let contFeminino = 0
    let totalFuncionarios = 0

    let percentualFem = 0
    let percentualMasc = 0


    let nome:string = String(prompt("informe seu nome: "))
    let horasTrabalhadas:number = Number(prompt("Informe suas horas trabalhadas: "))
    let salarioHora:number = Number(prompt("Informe quanto você recebe por hora: "))
    let sexo:string = String(prompt("Inform seu sexo sendo F-feminino e M-masculino")).toLocaleUpperCase()
    let saida:number = Number(prompt("Caso queira continuar o programa digite qualquer número, caso ao contrário digite -1 para encerrar."))


while(saida != -1){
    totalFuncionarios++
  
    salarioFinal = salarioHora * horasTrabalhadas 

    salarioTotalFuncionarios =  salarioTotalFuncionarios + salarioFinal
    
    if (salarioFinal > maiorSalario){
        maiorSalario  = salarioFinal
        nomeMaiorSalario = nome
    }
    if(sexo === "M"){
        contMAsculino++
    }
    if(sexo === "F"){
        contFeminino++
    }

    if(totalFuncionarios > 0){
        percentualFem = (contFeminino / totalFuncionarios) * 100
        percentualMasc = (contMAsculino / totalFuncionarios) * 100
    }


    nome = String(prompt("nforme seu nome: "))
    horasTrabalhadas = Number(prompt("Informe suas horas trabalhadas: "))
    salarioHora = Number(prompt("Informe quanto você recebe por hora: "))
    sexo = String(prompt("Inform seu sexo sendo F-feminino e M-masculino"))
    saida = Number(prompt("Caso queira continuar o programa digite qualquer número, caso ao contrário digite -1 para encerrar."))

}
console.log ("RESULTADOS: ")
console.log("Salário total dos funcionarios: " +salarioTotalFuncionarios+ ", e o maior salário foi: " + maiorSalario+ " de " +nomeMaiorSalario )
console.log("O número de funcionarias femininas cadastradas: " +contFeminino+ " e a quantidade de Masculinos cadastrados: " +contMAsculino  )
console.log("Percentual de Mulheres cadastradas: " +percentualFem+ " e o percentual de homens cadastrados: " +percentualMasc )

