// Array.prototype.every(): verificar se todos os elementos de um array seguem uma determinada 
//                          condição retornada pela função.

const numeros = [44, 34, 67, 81, 21, 54, 15];

const pessoas = [
  {
    nome: 'Pessoa 1',
    idade: 34,
    altura: 1.77,
  },
  {
    nome: 'Pessoa 2',
    idade: 25,
    altura: 1.56,
  },
  {
    nome: 'Pessoa 3',
    idade: 54,
    altura: 1.99
  },
  ];
  
const todosPositivos = numeros.every((elementos) => elementos > 0);

console.log(todosPositivos);

const todosMaioresIdade = pessoas.every((pessoa) => pessoa.idade >= 18);

console.log(todosMaioresIdade);

// Array.prototype.some(): verificar se algum  elemento do array torna verdadeira uma determinada 
//                          condição retornada pela função.

console.clear();

const num2 = [-1, 3, 7, -3, 5];

const retrono = num2.some((numero) => numero > 0); // funciona da mesma maneira que o every para objetos

console.log(retrono);


