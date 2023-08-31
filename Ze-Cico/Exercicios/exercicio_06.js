let lado1 = Number(prompt("Lado 1: "))
let lado2 = Number(prompt("Lado 2: "))
let lado3 = Number(prompt("Lado 3: "))


if(lado1 + lado2 < lado3 || lado1 + lado3 < lado2 || lado2 + lado3 < lado1){
    alert("não é um triangulo")
}
else{
    if(lado1 == lado2 && lado2 == lado3){
        alert("Tringulo Equilatero")
    }
    else if(lado1 == lado2 && lado1 != lado3 || lado2 == lado3 && lado2 != lado1 || lado1 == lado3 && lado1 != lado2){
        alert("Triangulo Isóseles")
    }
    else{
        alert("Triangulo Escaleno")
    }
}
