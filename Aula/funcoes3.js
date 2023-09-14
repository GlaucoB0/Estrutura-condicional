/*
Usuario vai passar por parametro de uma função as nota1, nota2, nota3 (A - Aritmética, P - Ponderada) pesos (5,3,2). Criar uma função que validar as nota
*/
let nota1,nota2,nota3

//funções
function ponderada(nota1,nota2,nota3){
    let media = (nota1*5+nota2*3+nota3*2)/10
    return media
}

function aritmetica(nota1,nota2,nota3){
    let media = (nota1+nota2+nota3)/3
    return media
}
function validarNotas(a){
    if(isNaN(a)){
        alert("Digite apenas números")
        return false
    }
    return true
}

//Perguntas e mostrar na tela
let operacao = prompt(`[P] Ponderada\n[A] Aritmetica?`)
operacao=operacao.toUpperCase() //transformando em maiusculo para não precisarmos ficar fazendo isso toda vez

if(operacao == 'P' || operacao == 'A'){
    do{
        nota1 = Number(prompt(`Digite a nota 1`))
    }while(!validarNotas(nota1))
    
    do{
    nota2 = Number(prompt(`Digite a nota 2`))
    }while(!validarNotas(nota2))
    
    do{
    nota3 = Number(prompt(`Digite a nota 3`))
    }while(!validarNotas(nota3))
    
    if(operacao == 'P'){
        alert(`${nota1}*5 + ${nota2}*3 + ${nota3}*2 / 10\nMedia: ${ponderada(nota1,nota2,nota3)}`)
    }
    else if(operacao == 'A'){
        alert(`${nota1} + ${nota2} + ${nota3} / 3\nMedia: ${aritmetica(nota1,nota2,nota3)}`)
    }
}else{
    alert("Digite [P] Ponderada ou [A] Aritmetica")
    location.reload()
}//fim do programa