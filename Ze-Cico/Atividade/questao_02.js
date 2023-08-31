
const nota1 = Number(prompt("Nota 1: "))
    if(nota1 > 10 || nota1 < 0 || isNaN(nota1)){
    alert("digite um numero de 1 a 10")
    location.reload()}

else if(nota1 >= 0 || nota1 <= 10){
    const nota2 = Number(prompt("Nota 2: "))
    if(nota2 > 10 || nota2 < 0 || isNaN(nota2)){
    alert("digite um numero de 1 a 10")
    location.reload()}

else if(nota2 >= 0 || nota2 <= 10){
    const nota3 = Number(prompt("Nota 3: "))
    if(nota3 > 10 || nota3 < 0 || isNaN(nota3)){
    alert("digite um numero de 1 a 10")
    location.reload()}

else if(nota3 >= 0 || nota3 <= 10){
    const nota4 = Number(prompt("Nota 4: "))
    if(nota4 > 10 || nota4 < 0 || isNaN(nota4)){
    alert("digite um numero de 1 a 10")
    location.reload()}

else if(nota4 >= 0 || nota4 <= 10){

let media = (nota1 + nota2 + nota3 + nota4)/4

if (media >= 7 ) {
    alert("aprovado!")

} else if (media < 7) {
    alert("reprovado!")
} else {
    
}
}
}
}


}

