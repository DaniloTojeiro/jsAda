const prompt = require('readline-sync');

const idade = Number(prompt.question('Qual a sua idade? '));

// const maiorIdade = idade >= 18;

// Estrutura Condicional: if/else

if (idade >= 18){
    console.log('Você é maior de idade!');
} else {
  console.log('Você é menor de idade!');
}

const mediaAluno = 7;

// Média >= 7 => Aprovado
// Média < 7 e Média >= 5 => Prova final
// Média < 5 => Reprovado

if (mediaAluno >= 6){
  console.log('Você foi aprovado!');
  console.log('Parabéns! 👍')
} else if (mediaAluno < 7 && mediaAluno >= 5) {
  console.log('Você ficou de recuperação!');
} else {
  console.log('Você foi reprovado!');
}


const idadePessoa = 18;
const cnh = true; 

if(idadePessoa >= 18 && cnh === true){
  console.log('Você está apto para dirigir!')
} else {
  console.log('Você não pode dirigir!')
}