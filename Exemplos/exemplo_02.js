let numero = Number(prompt("Digite um número: "))


if(numero >= 0){
    for(let i = numero ; 0 < i ; i--){
        document.write(numero+ "<br>")
        numero--
    }
}
else if(numero < 0){
    for(let i = numero ; i <= 1 ; i++){
        document.write(numero+ "<br>")
        numero++
    }
}
else if(isNaN(numero)){
    alert("Escreva um valor numerico valido")
    location.reload()
}
