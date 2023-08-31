let valor = Number(prompt("informe um valor: "))

if((valor%2)==0){
    alert(`${valor} é par`)
}
else if(isNaN(valor)){
    alert(`Digite um valor númerico`)
    location.reload
}
else{
    alert(`${valor} é impar`)
}