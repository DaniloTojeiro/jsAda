// ASSINCRONISMO:
// Callbacks (função de retorno ou chamada de retorno)
// Promises (promessas: pode ser coumprir ou não)
// Resolvendo promises utilizando async/await

const fs = require('fs');

// 1. Callbacks

// console.log('ANTES de ler o arquivo...');

// Função assíncrona (ler um arquivo leva um tempo)
// fs.readFile('./aula13/arquivo.txt', (erro, conteudoDoArquivo) => {
//   if(erro) {
//     console.log('Ocorreu ao tentar ler o arquivo: ', erro);
//   } else{
//     console.log(String(conteudoDoArquivo));
//   }
// });

// console.log('DEPOIS da função de ler o arquivo...');

// EXEMPLO 2: setTimeout (função que cria um timer)

// console.log('ANTES do setTimeout');

// setTimeout(() => {
//   console.log('Isso aqui vai ser executado após 2 segundos!');
// }, 2 * 1000)

// console.log('DEPOIS do setTimeout');

// 2 Promises(promessas)

// console.log('ANTES da criação de promieses...');

function lerArquivoPromise() {
  return  new Promise((resolve, reject) => {            // função que retorna promessa 
    fs.readFile('./aula13/arquivo.txt', (erro, conteudoDoArquivo) => {
        if(erro) {
          reject('Ocorreu ao tentar ler o arquivo: ', erro);
        } else{
          resolve(String(conteudoDoArquivo));
        }
      });
  });
}

// lerArquivoPromise().then((retornoDoResolveDaPromise) => {  // promise funcionando
//   console.log('Deu certo!', retornoDoResolveDaPromise);
// }).catch((erro) => { // quando deu um erro
//   console.log('Deu ruim: ', erro);
// }).finally(() => {   // sempre vai ser executado
//   console.log('Isso aqui vai ser executado, idependente do sucesso ou fracasso da promessa, no final dela');
// });  



// 3. async/await

async function leituraDeDados() {
  console.log('Isso é executado antes da promises ser resolvida!');

  try{
    const dadosDoArquivoLido = await lerArquivoPromise(); // Espera a promessa ser resolvida para poder avançar no código
    
    console.log(dadosDoArquivoLido);
    console.log('Isso é executado DEPOIS da promises ser resolvida!');
  } catch (err) {
    console.log(err);
    console.log('Isso aqui, é exucutado depois da promise(com erro)!');
  }
}

leituraDeDados();

