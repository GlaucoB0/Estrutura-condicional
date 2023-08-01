
let bairro = Number(parseInt(prompt("ANTARES [1]    BARRO DURO [2]      BEBEDOURO [3]    BENEDITO BENTES [4]\nCENTRO[5]        CLIMA BOM [6]    PAJUÇARA [7]   PONTA VERDE [8]\nJATIÚCA [9]\n      Digite seu bairro: ")))

switch (bairro) {
    case 1:
        alert("R$7,00");
        break;

    case 2:
        alert("R$5,00");
        break;

    case 3:
        alert("R$8,00");
        break;

    case 4:
        alert("R$6,00")
        break;

    case 5:
        alert("R$10,00");
        break;

    case 6:
        alert("R$4,00");
        break;
    
    case 7:
    case 8:
    case 9:
        alert("R$15,00");
        break;

}