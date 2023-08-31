let numero = Number(prompt("Digite um numero:")), i = 1, f = 1
do {
    document.write(i+`<br>`)
    f *= i
    i++
    
} while (i<=numero);
document.write(`Fatorial do numero ${numero} é ${f}`)