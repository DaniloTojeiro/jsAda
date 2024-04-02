 const prompt = require ('readline-sync');

let saldo = Number(prompt.question('Qual é o seu saldo? '));

while (saldo < 0){
 saldo = Number(
  prompt.question('Saldo inválido! Porfavor informe novamente: ')
  );
}

console.log(saldo);

// EXEMPLO 2

let notaAluno = Number(prompt.question('Informe a nota do aluno: '));
let somaNotas = 0; // Acumulador
let notasValidas = 0;

while(notaAluno >= 0){
  somaNotas += notaAluno; // Incremento
  notasValidas++; // pós-10incremento

  notaAluno = Number(prompt.question('Informe a próxima nota: '));
}

console.log(somaNotas);
console.log(notasValidas);
console.log('Média das notas dos alunos = ', somaNotas / notasValidas);

// EXEMPLO 3

// Math.random gera um número aleatório entre 0 e 1
const numAleatorio = parseInt(Math.random() * 10);

let numUsuario = Number(
  prompt.question('Informe um número entre 0 e 10: ')
  );
let qtdTentativas = 0;

while(numAleatorio !== numUsuario){
  qtdTentativas++;
  console.log('Você errou! Tente novamente...');
  numUsuario = Number(prompt.question('digite novamente: '));
}

console.log('Parabéns! Você acertou! O número era: ', numAleatorio);
console.log('Você acertou em ', qtdTentativas, 'tentativas!');

// LOOP COM CONTADOR

let contador = 0;

while(contador < 5){
  console.log(contador);
  contador++;

  if(contador === 2){
    continue; // Volta pro incio do loopp
  }
  console.log('Depois do if....')
}

// DO WHILE

let saldo1;
// undefined

do {
 saldo = Number(
  prompt.question('Informe um saldo válido: ')
  );
} while (saldo1 < 0)

console.log(saldo1);