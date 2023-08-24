let numChin = prompt("Número inicial de chinchilas")
let anos = prompt("Em quantos anos")
let i = 0

if (isNaN(numChin) || isNaN(anos) || numChin < 2) {
    alert("Digite um numero maior ou igual a 2")
    location.reload()
}
else {
    document.write(`O numero inicial de chinchilas é ${numChin}<br>`)
    do {
        numChin *= 3
        i++
        document.write(`Ao passar de ${i} anos o numero de chinchilas são ${numChin}<br>`)
    }
    while (i < anos)
}
