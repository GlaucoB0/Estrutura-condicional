let numero = prompt("Escreva um numero:")
let div = 0

for (let i = 1; numero >= i ; i++) {
    if(numero % i == 0){
        div++ 
    }
} 
if(div == 2){
    console.log("é")
}
else{
    console.log("não é")
}