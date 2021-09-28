// examples/calculaSituacao.js

function calculaSituacao(media) {
  if (media >= 7) {
    return 'aprovado';
  }

  return 'reprovado';
}

module.exports = calculaSituacao;


// Se passado um valor menor que 7 , por exemplo 4 , a resposta deve ser "reprovado" ;

// Se passado um valor maior que 7 , por exemplo 9 , a resposta ser "aprovado" ;

// E, não podemos esquecer do "OU", sendo assim, se passado 7 , a resposta deve ser "aprovado" ;

// Para validar esses cenários que pensamos podemos escrever algumas chamadas a nossa função:
