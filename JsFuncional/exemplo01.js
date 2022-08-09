// --> FOR EACH <--
const frutas = ["Banana", "Limão", "Pessêgo", "Uva"];

frutas.forEach((fruta) => {
  // console.log(fruta)
});

// --> MAP <--
const pessoas = [
  { nome: "Eduardo", sobrenome: "Aguiar", sexo: "M" },
  { nome: "Mariana", sobrenome: "Cabral", sexo: "F" },
  { nome: "Nicolas", sobrenome: "Nicolas", sexo: "M" },
];

// retorna um array com o nome das pessoas apenas
let nomePessoas = pessoas.map((pessoa) => {
  return pessoa.nome;
});

// retorna um novo array de obj, juntando as propriedades nome e sobrenome em uma só
let novoPessoas = pessoas.map((pessoa) => {
  return { nome: `${pessoa.nome} ${pessoa.sobrenome}`, sexo: pessoa.sexo };
});

// console.log(pessoas);
// console.log(nomePessoas);
// console.log(novoPessoas);

// --> REDUCE <--
const carrinhoCompra = [
  { nome: "Biscoito", valor: 3.99, quantidade: 5 }, // produto * qtd = 19.95
  { nome: "Leite", valor: 8.99, quantidade: 2 }, // produto * qtd = 17.98
  { nome: "Pão", valor: 0.8, quantidade: 8 }, // produto * = qtd 6.40
];

const numeros = [1, 10, 20];

let soma = numeros.reduce((acumulador, numero) => {
  return acumulador + numero;
}, 0);

let somaTotalProdutos = carrinhoCompra.reduce((acc, obj) => {
  return acc + obj.valor * obj.quantidade;
}, 0);

// console.log(soma);
// console.log(somaTotalProdutos);

// --> FILTER <--
const quantideMaiorCinco = carrinhoCompra.filter((produto) => {
  return produto.quantidade >= 5;
});

const valorMenorCinco = carrinhoCompra.filter((produto) => {
  return produto.valor < 5;
});

const pao = carrinhoCompra.filter((produto) => {
  return produto.nome.toLocaleLowerCase() === "pão";
});

// console.log(quantideMaiorCinco);
// console.log(valorMenorCinco);
// console.log(pao);
