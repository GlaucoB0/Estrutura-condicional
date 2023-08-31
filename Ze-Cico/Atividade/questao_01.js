//variaveis
let numero1, numero2

//agregando valores
numero1 = Number(prompt("digite um numero"))
numero2 = Number(prompt("digite um numero"))

if(numero1 === 0 || isNaN(numero1)){ //isNaN() é uma função que verifica se a variavel não é um numero
    alert(`Valor ${numero1} não é valido para o sistema`)
    location.reload() //é uma função nativa, por isso tem q chamar, ela recarrega a pagina()

}else if(numero2 === 0 || isNaN(numero2)){
    alert(`Valor ${numero2} não é valido para o sistema`)
    location.reload()
}
//logica
if (numero1 > numero2){
    alert(`${numero1} é maior que ${numero2}`)

} else if (numero2 > numero1){
    alert(`${numero2} é maior que ${numero1}`)
}

else if (numero1 == numero2){
    alert(`${numero1} é igual a ${numero2}`)
}

