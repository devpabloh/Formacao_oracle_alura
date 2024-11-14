essaPalavraEUmPalindromo()

function essaPalavraEUmPalindromo(){
    var palavra = "árvore"
    var separarAsLetraDaPalavra = palavra.split("")
    var palavraInvertida = separarAsLetraDaPalavra.reverse()
    palavraInvertida = palavraInvertida.join("")

    if(palavra == palavraInvertida){
        console.log(`A palavra ${palavra} é um palidromo!`)
    }else{
        console.log(`A palavra ${palavra} não é um palidromo!`)
    }

}