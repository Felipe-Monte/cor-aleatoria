const allBoxes = document.querySelectorAll('.item');
let errors = 0;
let successes  = 0;

let lastIndex = -1; // Armazena o índice da última caixa selecionada

function randomBoxColor() {
  // Limpa as cores de todas as caixas
  allBoxes.forEach((box) => {
    box.style.backgroundColor = '';
  });

  let randomIndex;

  // Gera um novo índice enquanto for igual ao último
  do {
    randomIndex = Math.floor(Math.random() * allBoxes.length);
  } while (randomIndex === lastIndex);

  // Atualiza o índice da última caixa selecionada
  lastIndex = randomIndex;

  // Define a cor da caixa selecionada
  const randomBox = allBoxes[randomIndex];
  randomBox.style.backgroundColor = 'red';
}

randomBoxColor();

allBoxes.forEach((box) => {
  box.addEventListener('click', function () {
    if (box.style.backgroundColor === 'red') {
      randomBoxColor();
      successes ++;
    } else {
      errors++;
    }

    console.log(`Erros: ${errors} Acertos: ${successes }`);
  });
});

