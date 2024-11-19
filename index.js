const allBoxes = document.querySelectorAll('.item');

function randomBoxColor() {
  allBoxes.forEach((box) => {
    box.style.backgroundColor = '';
  });

  const randomIndex = Math.floor(Math.random() * allBoxes.length);
  const randomBox = allBoxes[randomIndex];

  randomBox.style.backgroundColor = 'red';
}

randomBoxColor();

//Se a caixa clicada for vermelha mostre "acertou" no console se nao "errou"
