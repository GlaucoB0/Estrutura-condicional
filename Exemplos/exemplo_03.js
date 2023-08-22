let numero = Number(prompt("Digite um número: "))
let pares 

if(numero >= 0){
    for(let i = numero ; 0 < i ; i--){

        if(numero % 2 == 0){
            document.write("Par ")
        }
        else{
            document.write("Impar ")
        }
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
