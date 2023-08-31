let c = 0,
    numero = Number(prompt("Digite um numero")),
    i = 0

do {
    for (i = 0; i <= numero; i++) {
        if(numero % i == 0){
            c += i
        }
    }
} while (i <= numero)

c -= numero

if (numero == c) {
    document.write("é")
} else {
    document.write("não é")
}
