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
      if(idade >= 0 && idade <= 4) {
        img.setAttribute("src", "./assets/bebe-f.png");
      } else if(idade >= 5 && idade <= 15) {
        img.setAttribute("src", "./assets/crianca-f.png");
      } else if(idade >= 16 && idade <= 21) {
        img.setAttribute("src", "./assets/jovem-f.png");
      } else if(idade <= 50) {
        img.setAttribute("src", "./assets/adulto-f.png");
      } else {
        img.setAttribute("src", "./assets/idoso-f.jpg");
      }
    } else {
      genero = "Homem";
      if(idade >= 0 && idade <= 4) {
        img.setAttribute("src", "./assets/bebe-m.png");
      } else if(idade >= 5 && idade <= 15) {
        img.setAttribute("src", "./assets/crianca-m.png");
      } else if(idade >= 16 && idade <= 21) {
        img.setAttribute("src", "./assets/jovem-m.png");
      } else if(idade <= 50) {
        img.setAttribute("src", "./assets/adulto-m.png");
      } else {
        img.setAttribute("src", "./assets/idoso-m.png");
      }
    }

    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    resultado.appendChild(img);
  }
}
