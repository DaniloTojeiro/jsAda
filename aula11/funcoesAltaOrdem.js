// HIGH ORDER FUNCTIONS

// 1 - Função que retorna outra função como parâmetro (Cloujure)

function welcome(courseName){
  return (studentName) => {
    console.log(
      `Olá, ${studentName}! Seja bem-vindo(a) ao curso de ${courseName}`
      );
  };
}

const welcomeToFrontEndCourse = welcome("Front-End em React");

welcomeToFrontEndCourse("Danilo Tojeiro");

console.clear();

// 2 -Função que recebe outra função com parâmetro

const somar = (n1, n2) => n1 + n2;
const subtrair = (n1, n2) => n1 - n2;
const multiplicar = (n1, n2) => n1 * n2;
const dividir = (n1, n2) => n1 / n2;

//operacao: função que realiza a operação entre os dois números
//          ou seja, ela precisa ser uma função que receba dois números

const calcular = (n1, n2, operacao) => operacao(n1, n2);

const retorno = calcular(10, 5, somar);

console.log(retorno);

// O calculo que eu quero é: (n1 * n2) + (2 * n1 * n2)

const resultado = calcular(10, 5, (n1, n2) => n1 * n2 + 2 * n1 * n2);

console.log(resultado);

