const prompt = require('readline-sync');

// Definição da função

function saudacao(nomeEstudante, curso = 'React'){ // da pra passar mais de um parâmetro, curso = 'React' parametro padrão
  // Template String || Template Literals
  // console.log(`Olá, ${nomeEstudante}!`); Utilizar crase para a template string
 return(`Olá, ${nomeEstudante}! Seja bem-vindo(a) ao curso de ${curso}`);
}

// saudacao('Danilo', 'React');  chamda da função saudação, pode seer String, Number, Boolean...
const mensagemSaudacao = saudacao('Danilo', 'Back-End Node.js'); // aqui ele assume o parametro deixando o padrão para trás

console.log(mensagemSaudacao);

console.clear();

// Exemplo 2

function somar(n1, n2){
  return n1 + n2;
}

const result = somar(2, 3);

console.log(result);
console.log(result / 10);

console.clear();

// ----------------------------------
// FUNÇÕES ANÔNIMAS
// First Class Function, o JS trata funções como variáveis

const dobroNum = function (num){
  return num * 2;
}

const dobro = dobroNum(2);
console.log(dobro);

console.clear();

// ----------------------------------
// ARROW FUNCTIONS: Função seta

const subtrair = (n1, n2) => {
  result = n1 - n2; 
};

const multiplicar = (n1, n2) => n1 * n2;

const triploNum = (n) => n *3;