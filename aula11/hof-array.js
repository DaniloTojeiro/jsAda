// FUNÇÕES DE ALTA ORDEM DE ARRAYS

// 1.Array.forEach()

const numeros = [44, 34, 67, 81, 21, 54, 15];

// function imprimirElemento(elemento){
//   console.log(elemento);
// }

numeros.forEach((elemento, index, arrayCompleto) => {  
  console.log(index, elemento, arrayCompleto);
});

console.clear();

// 2.Array.find(): útil para encontrar um elemento dentro do array

const encontrado = numeros.find((numero) => {
  // return numero === 54;
  // return numero > 30;
  return numero < 20 && numero > 10;
});

console.log(encontrado);


// Array de objetos
// [{}, {}, {}]
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

const pessoaEncontrada = pessoas.find(
  (pessoa) => pessoa.idade > 20 && pessoa.altura < 1.7
  );

console.clear();
console.log(pessoaEncontrada);

// 3. Array.findIndex(): muito parecido com o find, porém retorna o índice do elemento encontrado

const indecePessoaEncontrada = pessoas.findIndex( // Quando o findIndex não encontra nenhum elemento ele retorna -1
  (pessoa) => pessoa.idade > 20 && pessoa.altura < 1.7
  );

console.clear();
console.log(indecePessoaEncontrada);