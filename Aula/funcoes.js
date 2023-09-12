/* exercicio 1 crie uma função chamada calcularMedia que aceite 3 numeros como argumento e retorne a media desses numeros */

let a,b,c
let media

function media(a,b,c){
    media = (a + b + c)/3
    return media
}

a = 5
b = 4
c = 3

document.write(media(a,b,c))