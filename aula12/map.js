// Map
// Ele cria um novo Array que possui um mesmo tamanho do Array original
// composto com os elementos que foram retornados a cada iteração

const numeros = [44, 34, 67, 81, 21, 54, 15];

const novoArray = numeros.map((elemento, index, arrayCompleto) => {
  return elemento * 2; // tranforma o array original
});

console.log(novoArray);

// Exemplo 1: elevando todos os números ao quadrado 

console.clear();

const valores = [35, 45, 32, 24, 4, 22, 49, 23, 8];

const valoresAoQuadrado = valores.map((valor) => valor **2);

console.log(valoresAoQuadrado);


// Exemplo 2: Adicionando uma propriedade aos objetos do array
console.clear();

const carrinho = [
  { produto: 'Feijão', preco: 7.89, quantidade: 3 },
  { produto: 'Arroz', preco: 4.98, quantidade: 5 },
  { produto: 'Leite 1l', preco: 6.99, quantidade: 2 },
];

const carrinhoTotal = carrinho.map((itemDoCarrinho) => {
  return {
    ...itemDoCarrinho,
    total: itemDoCarrinho.preco * itemDoCarrinho.quantidade,
  };
});

console.log(carrinhoTotal);


// const pessoa = {
//   nome: 'Danilo',
//   idade: 30,
//   altura: 1.85, 
// };

// // Desestruturação ou spread (operator)
// const pessoaComPeso = {
//   ...pessoa,  // pega tudo o que tinha no objeto pessoa e add o atributo com peso
//   peso: 75,
// };

// console.log(pessoaComPeso);