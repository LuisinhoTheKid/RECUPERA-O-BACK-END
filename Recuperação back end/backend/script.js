let nome = prompt("Digite seu nome:");
console.log(nome);
window.alert(`Olá ${nome}!`);

let numero = parseInt(Math.random() * 10 + 1);
let tentativas = 0;
let palpite = 0;

while (palpite !== numero && tentativas < 5) {
    palpite = parseInt(prompt("Digite um número:"));
    tentativas++;
    if (palpite > numero) {
        window.alert(`Você errou! O número é menor que ${palpite}. Tente outra vez.`);
    } else {
        if (palpite < numero) {
            window.alert(`Você errou! O número é maior que ${palpite}. Tente outra vez.`);
        }
    }
}

if (numero === palpite) {
    let palavratentativa = tentativas === 1 ? "tentativa" : "tentativas";
    window.alert(`Parabéns ${nome}! O número era ${numero}, e você acertou com ${tentativas} ${palavratentativa}!!`);
} else {
    window.alert(`Você esgotou suas tentativas e não acertou. O número era ${numero}!`);
}
