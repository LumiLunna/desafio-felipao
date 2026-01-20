let nomeHeroi = "Inevitavel";
let xpHeroi = 7500;
let nivelHeroi = "";
if (xpHeroi < 10000) {
nivel = "Ferro";
} else if (xpHeroi >= 10001 && xpHeroi < 20000) {
    nivel = "Bronze";
} else if (xpHeroi >= 20001 && xpHeroi < 50000) {
    nivel = "Prata";
} else if (xpHeroi >= 50001 && xpHeroi < 70000) {
    nivel = "Ouro";
} else if (xpHeroi >= 70001 && xpHeroi < 80000) {
    nivel = "Platina";
} else if (xpHeroi >= 80001 && xpHeroi < 90000) {
    nivel = "Ascendente";
} else if (xpHeroi >= 90001 && xpHeroi < 100000) {
    nivel = "Imortal";
} else if (xpHeroi >= 100001) {
    nivel = "Radiante";
}
console.log(`O herói ${nomeHeroi} possui ${xpHeroi} pontos de experiência e é do nível ${nivel}.`);