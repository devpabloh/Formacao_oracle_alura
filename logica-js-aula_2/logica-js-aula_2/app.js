alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute;
let tentativas = 1;
// Enquanto (while) o chute for diferente(!=) do número secreto execute esse bloco de códigos
while(chute != numeroSecreto){
    // solicitando o número do chute através do prompt e guardando no espaço da memória que tem o nome chute
    chute = prompt('Escolha um número entre 1 e 10');

    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if(numeroSecreto > chute){
        alert(`O número é maior que o ${chute}`);
        }else{
        alert(`O número é menor que o ${chute}`);
        }
        tentativas++;
    }
    
}

let quantidadeTentativas = tentativas > 1 ? `tentativas` : `tentativa`;
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${quantidadeTentativas}`);


/* if(tentativas > 1){
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${quantidadeTentativas}`);
} else{
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${quantidadeTentativas}`)
} */