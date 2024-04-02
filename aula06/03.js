const prompt = require('readline-sync');

const idade = prompt.question('Qual a sua idade? '); // sempre vai ler como string

const idadeNumber = Number(idade);

// Coerção Explicita(Conversão Manual)

console.log(idadeNumber, typeof idadeNumber);

console.log(Number('X')); // NaN Not a Number 

console.log(String(10), typeof String(10)); //String

console.log(Boolean(2)); // qualquer número diferente de 0 é verdadeiro

// Coerção Implicita

console.log(1 + '1'); // 11 concatenou
console.log(10 - '5'); // 5 se não for soma ele faz a operação normal

let n = 1 + '1'; // '11' (string) concatena

n = n - 1; // 11 - 1 = 10

console.log(n);

console.log(2 + 3 + 4 +'5'); // 5 + 4 + '5' = 9 + '5' = '95'
console.log('5'+ 2 + 3 + 4); // '52' + 3 + 4 = '523' + 4 = '5234'
console.log('10' - '4' - '3' - 2 + '5') // 6 - '3' - 2 + '5' = 3 - 2 + '5' = 1 + '5' = '15' 