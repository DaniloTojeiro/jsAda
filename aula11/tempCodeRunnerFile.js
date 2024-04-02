const pessoas = [
{
  nome: 'Pessoa 1',
  idade: 34,
},
{
  nome: 'Pessoa 2',
  idade: 25,
},
{
  nome: 'Pessoa 3',
  idade: 54,
},
];

pessoas.find((pessoa) => pessoa.idade > 40);