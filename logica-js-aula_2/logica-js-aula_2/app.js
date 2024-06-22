alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto)

// Enquanto (while) o chute for diferente(!=) do número secreto execute esse bloco de códigos
while(chute != numeroSecreto){
    // solicitando o número do chute através do prompt e guardando no espaço da memória que tem o nome chute
    let chute = prompt('Escolha um número entre 1 e 10');

    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
    } else {
        if(numeroSecreto > chute){
        alert(`O número é maior que o ${chute}`)
        }else{
        alert(`O número é menor que o ${chute}`)
    }
}
}