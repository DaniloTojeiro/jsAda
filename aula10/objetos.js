// Object Literal

const pessoa = {
  nome: 'Danilo', 
  idade: 31,
  altura: 1.85,
  programador: true,
  hobbies: ['ler livros', 'tocar guitarra', 'sair para beber'],
  imprimirAlgo: () => { 
    console.log('Chamou a função!');
  },
};

console.log(pessoa);
console.clear();

console.log(pessoa.nome);
console.log(pessoa.hobbies);

delete pessoa.altura; // deleta atributos
console.log(pessoa);

console.clear();

pessoa.imprimirAlgo();

const idade = 30;
const altura = 1.85;

const objeto = {
  idade,
  altura,
};

console.log(objeto);
console.clear();

const { nome, hobbies } = pessoa;

console.log(nome);
console.log(hobbies);
console.log(pessoa);

