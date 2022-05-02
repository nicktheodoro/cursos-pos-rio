function carregar() {
  let mensagem = document.getElementById("container-txt");
  let imagem = document.getElementById("imagem");

  // let mes = new Date().getMonth();
  let mes = 10;
  mensagem.innerHTML = `A estação atual é ${defineEstacaoAtual(mes)}!`;

  defineFotoEBackgroundEstacao(mes);
}

function defineFotoEBackgroundEstacao(numeroMes) {
  if (numeroMes < 3) {
    imagem.src = "./assets/verao.jpg";
    document.body.style.background = "#4695D0";
  } else if (numeroMes < 6) {
    imagem.src = "./assets/outono.jpg";
    document.body.style.background = "#800E04";
  } else if (numeroMes < 9) {
    imagem.src = "./assets/inverno.jpg";
    document.body.style.background = "#C7CBD4";
  } else {
    imagem.src = "./assets/primavera.jpg";
    document.body.style.background = "#6A2F4D";
  }
}

function defineEstacaoAtual(numeroMes) {
  if (numeroMes < 3) {
    return "verão";
  } else if (numeroMes < 6) {
    return "outono";
  } else if (numeroMes < 9) {
    return "inverno";
  } else {
    return "primavera";
  }
}
