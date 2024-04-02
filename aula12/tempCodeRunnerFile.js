const pessoa = {
  nome: 'Danilo',
  idade: 30,
  altura: 1.85, 
};

// Desestruturação ou spread (operator)
const pessoaComPeso = {
  ...pessoa,  // pega tudo o que tinha no objeto pessoa e add o atributo com peso
  peso: 75,
};

console.log(pessoaComPeso);