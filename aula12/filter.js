// FILTER
// o map: sempre retorna um array do mesmo tamanho do array original 
// filter: sempre retorna um array de tamanho igual ou inferior do tamanho do array original 

const valores = [35, 45, 32, 24, 4, 22, 49, 23, 8, 10];

const pares = valores.filter((valor) => valor % 2 === 0);

console.log(pares);

// Exemplo 1:
// Média superior a 85
console.clear();

const alunos = [
  { nome: 'Quincy', media: 96 },
  { nome: 'Jason', media: 84 },
  { nome: 'Alexia', media: 100 },
  { nome: 'Sam', media: 65 },
  { nome: 'Katie', media: 90 },
];

const mediaAluno = alunos.filter((aluno) => aluno.media > 85);

console.log(mediaAluno);

// Exemplo 2: 
// filtrar produtos que tenha um valor abaixo de 10 reais e que sejam bebidas
console.clear();

const produtos = [
  { nome: 'Suco de Laranja', preco: 7.50, tipo: 'Bebida' },
  { nome: 'Batata frita', preco: 10.50, tipo: 'Comida' },
  { nome: 'Pizza', preco: 12.49, tipo: 'Comida' },
  { nome: 'Chocolate', preco: 1.50, tipo: 'Comida' },
  { nome: 'Pastel', preco: 4.50, tipo: 'Comida' },
  { nome: 'Coca', preco: 6.99, tipo: 'Bebida' },
];

const produtosFiltrados = produtos.filter((produto) => produto.preco < 10 && produto.tipo !== 'Bebida');
console.log(produtosFiltrados);