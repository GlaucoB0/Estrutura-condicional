/*
 
Crie um programa que simule uma lista de compras e coloque em um array. O programa deve continuar rodando até que o usuário peça para sair. Depois, exiba na tela os produtos cadastrados.

 */

let item,
    lista = [],
    i = 0,
    sair;

do {
    item = prompt(`Item${i}: `);
    lista.push(item);

    if (item != "SAIR" || item != "sair" || item != "Sair") {
        i++
        continue;
    }
    else {
        sair = confirm("Deseja sair?");
        if (sair == true) {
            break;
        }
        else {
            continue;
        };
    };
}
while (true);

document.write(`Sua lista de compras tem ${lista.length - 1} itens:<br>`);
for(i = 0 ; i < (lista.length - 1); i++){
    document.write(`${lista[i]}, `);
}