const prompt = require('readline-sync');

// expressão 1: incialização da variável de controle
// expressão 2: condição de permanência do for
// expressão 3: o incremento da variável de controle

for(i = 0; i < 5; i++) {
  console.log(i);
}

// for(;;){} loop infinito

// limpando o console

console.clear();

// Exemplo 

let numMaior = 0;
let numInformado;

for(let i = 1; i < 5; i++){
  numInformado = Number(prompt.question('Informe um número positivo: '));

  if(numInformado > numMaior){
    numMaior = numInformado;
  }
}

console.log('Maior número escolhido foi: ', numMaior);

// Exemplo: percorrendo Strigng com for

const nome = 'Chico Linguica';

for(let i = 0; i < nome.length; i++){
  console.log(nome[i]);
}

console.clear();

// ARRAYS

const notasAlunos = [10, 8, 5];
const pessoa = ['Danilo', 31, 1.85, true];

console.log(notasAlunos);
console.log(pessoa);
console.log(pessoa[1]);

// Fatiamento do Array

const num =[40, 34, 67, 89, 23, 10];

console.log(num.slice(0, 2));
console.log(num.slice(2)); // se não especifica, ele vai do 2 até o final do Array

console.clear();

// Adicionando elemento no final do Array

num.push(0);
console.log(num);

// Adionando elementos no início do Array

console.clear();
num.unshift(-1);
console.log(num);

// Remover elemento que está no final do Array

console.clear();
num.pop()
console.log(num);

// Remove o primeiro elemento do Array

console.clear();
num.shift();
console.log(num);

// descobrir elementos em Array

console.clear();
console.log(num.includes(20));
console.log(num.includes(10));

if(num.includes(20)){
  console.log('Opa! Existe número 10 dentro do Array!');
} else {
  console.log('Não existe o número 20 dentro do array!'); 
}

const existeNum20 = num.includes(20);

console.clear();

// indexOf
// f2 para renomear a variável

const indiceElemento20 = num.indexOf(20);

console.log(indiceElemento20); // Toda vez que o indexOf retornar -1 significa que o elemento não está dentro do Array

// lastIndexOf

const indiceElemento40 = num.lastIndexOf(40);

console.log(indiceElemento40); // Ele pega o último indíce que está dentro do Array

console.clear();

// Percorrendo Arrays com o For

const arr = [45, 36, 90, 76, 32, 7];

for(let i = 0; i < arr.length; i++){
  console.log(i, arr[i]);
}

console.clear();

// For-of: percorre os elementos

for(const elemento of arr){
  console.log(elemento);
}

console.clear();

// For-in: percorre os indíces

for(const indice in arr){
  console.log(indice);
}