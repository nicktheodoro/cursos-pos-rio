(function alternador() {
  const botaoLigar = document.querySelector("#botao-alternador");
  let fundoAlternador = document.querySelector(".ligar-desligar");

  botaoLigar.onclick = function () {
    fundoAlternador.classList.toggle("luz-ligada");

    if (this.innerHTML == "Ligar") {
      this.innerHTML = "Desligar";
    } else {
      this.innerHTML = "Ligar";
    }
  };
})();

(function ativaBotao() {
  let campoNome = document.getElementById("form-nome");
  let botaoEnviar = document.getElementById("botao-enviar");

  campoNome.onkeyup = () => {
    
    if (campoNome.value.length >= 5) {
      botaoEnviar.classList.remove("desabilitado");
      botaoEnviar.disabled = false;
    } else {
      botaoEnviar.classList.add("desabilitado");
      botaoEnviar.disabled = true;
    }
  };
})();

(function girarTela() {
  const botaoGirar = document.querySelector("#botao-girar");
  const telaInteira = document.querySelector("body");

  botaoGirar.onclick = () => {
    telaInteira.style.transition = "1.5s linear";
    telaInteira.style.transform = "rotate(360deg)";
  }
})();

function trocaFundo(imagemFundo) {
  let fundoModulo = document.querySelector("#fundo-imagens");
  fundoModulo.style.backgroundImage = `url(../img/${imagemFundo})`;
}