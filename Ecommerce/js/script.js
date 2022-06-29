const URL = "https://crud-basico-node.herokuapp.com";

let listaDeProdutos = [];
let tbody = document.querySelector('table>tbody');

// Aqui estou capturando os elementos do meu formulário de cadastro
// TODO: Lógica de cadastro está incompleta
let form = {
  campoNome: document.querySelector("#nome"),
  campoValor: document.querySelector("#valor"),
  campoQuantidade: document.querySelector("#quantidade"),
  btnCadastrar: document.querySelector("#btnCadastrar"),
}

function obterListaDeProdutos() {
  fetch(`${URL}/produtos`)
    .then(resposta => resposta.json())
    .then(resposta => {
      resposta.forEach(produto => {
        listaDeProdutos.push(produto)
      })

      popularTabela(listaDeProdutos)
    })
}

function popularTabela(listaDeProdutos) {
  //Aqui limpo a tabel
  tbody.textContent = "";

  listaDeProdutos.forEach(produto => {
    criarTrComBaseNoProduto(produto)
  })
}

function criarTrComBaseNoProduto(produto) {
  let tr = document.createElement('tr');
  let tdId = document.createElement('td');
  let tdNome = document.createElement('td');
  let tdValor = document.createElement('td');
  let tdEstoque = document.createElement('td');
  let tdOpcoes = document.createElement('td');

  tdId.textContent = produto.id;
  tdNome.textContent = produto.nome;
  tdValor.textContent = produto.valor;
  tdEstoque.textContent = produto.quantidadeEstoque;
  tdOpcoes.innerHTML = `<button onclick="editar(${produto.id})" class="btn btn-outline-info btn-sm">Editar</button>
  <button onclick="excluir(${produto.id})" class="btn btn-outline-info btn-sm">Excluir</button>`;

  tr.appendChild(tdId);
  tr.appendChild(tdNome);
  tr.appendChild(tdValor);
  tr.appendChild(tdEstoque);
  tr.appendChild(tdOpcoes);

  tbody.appendChild(tr);
}

function cadastrar(id) {
  fetch(`${URL}/produtos/${id}`, {
    method: "POST",
    headers: "Content-Type: application/json"
  }).then(reposta => {
    // DESAFIO: CADSTRAR UM PRODUTO
  })
}

function excluir(id) {
  fetch(`${URL}/produtos/${id}`, {
    method: "DELETE",
  }).then(() => {
    alert("Produto deletado com sucesso")

    let indice = listaDeProdutos.findIndex(produto => produto.id == id)
    listaDeProdutos.splice(indice, 1);
    popularTabela(listaDeProdutos);
  })
}
