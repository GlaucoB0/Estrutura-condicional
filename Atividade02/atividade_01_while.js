let numero = prompt("Escreva um numero:")
let div = 0
let i = 1

do{
    if (isNaN(numero) || numero == 0) {
        alert("Digite um valor válido")
        location.reload()
    } else {
        if(numero % i == 0){
            div++ 
        }
        i++  
    }
   
} 
while(numero >= i)

if(div == 2){
    console.log("é")
}
else{
    console.log("não é")
}