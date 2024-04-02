lerArquivoPromise().then((retornoDoResolveDaPromise) => {  // promise funcionando
  console.log('Deu certo!', retornoDoResolveDaPromise);
}).catch((erro) => { // quando deu um erro
  console.log('Deu ruim: ', erro);
}).finally(() => {   // sempre vai ser executado
  console.log('Isso aqui vai ser executado, idependente do sucesso ou fracasso da promessa, no final dela');
});  
