const cardsContainer = document.querySelector('.cards-container')

for (let i = 1; i <= 500; i++) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
  .then(res => res.json())
  .then(res => {
    let card = document.createElement('div');
    card.setAttribute('class', 'card');

    let img = document.createElement('img');
    img.src = res.sprites.other.dream_world.front_default;

    let title = document.createElement('h1');
    title.innerHTML = res.name

    card.appendChild(img);
    card.appendChild(title);
    cardsContainer.appendChild(card);

  });
}

