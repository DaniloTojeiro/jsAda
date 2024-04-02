// Operações booleanas: Comparações

const n1 = 10;
const n2 = 12;

console.log(n1 == n2);
console.log(n1 === n2);
console.log(n1 === '10'); // false compara o valor e o tipo, boa prática usar os 3 iguais
console.log(n1 == '10'); // true só compara o valor

console.log(n1 != n2); //comparando só os valores também, não o tipo
console.log(n1 !== n2);


const idadePessoa1 = 30;
const idadePessoa2 = 15;

console.log(idadePessoa1 >= 18 && idadePessoa2 >= 18); // and os dois tem que ser maiores de idade para dar true
console.log(idadePessoa1 >= 18 || idadePessoa2 >= 18); // or se um for maior de idade da true

console.log(!true); // A ! inverte a resposta
console.log(!(idadePessoa2 >= 18)); // Retorna verdadeiro se for menor de idade