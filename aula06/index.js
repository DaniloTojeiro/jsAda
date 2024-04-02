// JavaScript possui uma tipagem dinâmica: infere os tipos de dados
// Javascript possui uma tipagem fraca

var nome = 'Danilo' // string
var idade = 31 // number
var altura = 1.77 // number
var estudando = true //booleano

console.log(nome, typeof nome)
console.log(idade, typeof idade)
console.log(altura, typeof altura)
console.log(estudando, typeof estudando)

var semConteudo; // valor undefined

console.log(semConteudo)

var curso = 'Front-end em React', topico = 'JavaScript Básico I'

console.log(curso, topico)

//NÃO UTILIZE O VAR PARA JS

let notaAluno = 10 // Consigo alterar o valor
const mediaAluno = 10 // Não consigo alterar o valor

notaAluno = 9 
// mediaAluno = 9 não é permitido

console.log(notaAluno)
console.log(mediaAluno)
