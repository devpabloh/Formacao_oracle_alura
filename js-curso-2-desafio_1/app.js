/* 

Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.

*/

let titulo = document.querySelector("h1")
titulo.innerHTML = "Hora do desafio!"

function buttonConsole(){
    console.log("O botão foi clicado!")
}

function buttonAlert(){
    alert("Eu amo js!")
}

function buttonPrompt(){
    let cidade = prompt("Qual a cidade do Brasil?")
    alert(`Estive em ${cidade} e lembrei de você!`)
}

function buttonSoma(number1, number2){
    number1 = parseInt(prompt("Qual o primeiro valor?"))
    number2 = parseInt(prompt("Qual o próximo valor?"))

    return alert(number1 + number2)
}
