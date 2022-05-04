function verificar() {
  let anoAtual = new Date().getFullYear();

  let anoNascimentoForm = document.getElementById("txtano");
  let resultado = document.querySelector("div#resultado");

  if (
    anoNascimentoForm.value.length == 0 ||
    anoNascimentoForm.value > anoAtual
  ) {
    alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    let formSexo = document.getElementsByName("radsex");
    let idade = anoAtual - Number(anoNascimentoForm.value);
    let genero = "";
    let img = document.createElement("img");
    img.setAttribute("id", "imagem");

    if (formSexo[0].checked) {
      genero = "Mulher";
      img.setAttribute("src", "./assets/bebe-f.png");
    } else {
      genero = "Homem";
      img.setAttribute("src", "./assets/bebe-m.png");
    }

    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    resultado.appendChild(img);
  }
}
