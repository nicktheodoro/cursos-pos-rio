const URL = "https://crud-basico-node.herokuapp.com";

let listaDeProdutos = [];
let tbody = document.querySelector("table>tbody");
let modal = document.querySelector("#cadastroProduto");

// Aqui estou capturando os elementos do meu formulário de cadastro
let form = {
  campoNome: document.querySelector("#nome"),
  campoValor: document.querySelector("#valor"),
  campoQuantidade: document.querySelector("#estoque"),
  btnCadastrar: document.querySelector("#btnCadastrar"),
};

form.btnCadastrar.addEventListener("click", (evento) => {
  evento.preventDefault();

  let nome = form.campoNome.value;
  let valor = form.campoValor.value;
  let quantidadeEstoque = form.campoQuantidade.value;
  if (!nome) {
    alert("O nome precisa ser preenchido.");
  } else if (!valor) {
    alert("O valor precisa ser preenchido.");
  } else if (!quantidadeEstoque) {
    alert("A quantidade precisa ser preenchida.");
  }

  let produto = { nome, valor, quantidadeEstoque };
  cadastrar(produto);
});

function obterListaDeProdutos() {
  fetch(`${URL}/produtos`)
    .then((resposta) => resposta.json())
    .then((resposta) => {
      resposta.forEach((produto) => {
        listaDeProdutos.push(produto);
      });

      popularTabela(listaDeProdutos);
    });
}

function popularTabela(listaDeProdutos) {
  //Aqui limpo a tabel
  tbody.textContent = "";

  listaDeProdutos.forEach((produto) => {
    criarTrComBaseNoProduto(produto);
  });
}

function criarTrComBaseNoProduto(produto) {
  let tr = document.createElement("tr");
  let tdId = document.createElement("td");
  let tdNome = document.createElement("td");
  let tdValor = document.createElement("td");
  let tdEstoque = document.createElement("td");
  let tdOpcoes = document.createElement("td");

  tdId.textContent = produto.id;
  tdNome.textContent = produto.nome;
  tdValor.textContent = produto.valor;
  tdEstoque.textContent = produto.quantidadeEstoque;
  tdOpcoes.innerHTML = `<button onclick="editar(${produto})" class="btn btn-outline-info btn-sm" data-bs-toggle="modal" data-bs-target="#cadastroProduto">Editar</button>
  <button onclick="excluir(${produto.id})" class="btn btn-outline-info btn-sm">Excluir</button>`;

  tr.appendChild(tdId);
  tr.appendChild(tdNome);
  tr.appendChild(tdValor);
  tr.appendChild(tdEstoque);
  tr.appendChild(tdOpcoes);

  tbody.appendChild(tr);
}

function cadastrar(produto) {
  fetch(`${URL}/produtos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(produto),
  })
    .then((resposta) => resposta.json())
    .then((resposta) => {
      listaDeProdutos.push(resposta);
      popularTabela(listaDeProdutos);
      fecharModal();
    });
}

function editar(produto) {
  //TODO: Verificar erro ao puxar produto
  form.campoNome.value = produto.nome;
  form.campoValor.value = produto.valor;
  form.campoQuantidade.value = produto.estoque;
}

function excluir(id) {
  fetch(`${URL}/produtos/${id}`, {
    method: "DELETE",
  }).then(() => {
    alert("Produto deletado com sucesso");

    let indice = listaDeProdutos.findIndex((produto) => produto.id == id);
    listaDeProdutos.splice(indice, 1);
    popularTabela(listaDeProdutos);
  });
}

function fecharModal() {
  const instanciaModal = bootstrap.Modal.getInstance(modal);
  instanciaModal.hide();
}
