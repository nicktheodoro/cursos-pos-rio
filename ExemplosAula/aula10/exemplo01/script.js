function carregar() {
  let mensagem = document.getElementById("container-msg");
  let imagem = document.getElementById("img");

  let data = new Date();
  // let hora = data.getHours();
  let hora = 19;
  mensagem.innerHTML = `Agora são ${hora} horas.`;

  if (hora >= 0 && hora < 12) {
    // Manhã
    imagem.src = "./assets/manha.jpg";
    document.body.style.background = "#F7EAD8";
  } else if (hora >= 12 && hora <= 18) {
    // Tarde
    imagem.src = "./assets/tarde.jpg";
    document.body.style.background = "#AF773A";
  } else {
    // Noite
    imagem.src = "./assets/noite.jpg";
    document.body.style.background = "#15272B";
  }
}
