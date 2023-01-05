let computer = Math.floor(Math.random() * 10);

let player = prompt('Adivinhe o número que estou pensando. está entre 0 e 10!');
player = Number(player);

let tentativas = 1;


while (player != computer) {
    player = prompt('Não foi dessa vez. Tente novamente:');
    player = Number(player);
    tentativas++;
}
if (tentativas === 1) {
    alert(`Parabéns, Você adivinhou o número em ${tentativas} tentativa!`);
} else {
    alert(`Parabéns, Você adivinhou o número em ${tentativas} tentativas!`);
}