const words = ["Oi meu bem", "Eu sou programador", "você sabe", "então", "eu tive que", "fazer essa brincadeirinha", "mas", "enfim", "você realmente", "vai querer saber", "qual é seu presente?","...", "...","...", "...", "posso te contar","mas depois","você não pode","ficar chateada comigo","ok?","Te","Amo","❤️"];
const finalLinkUrl = "https://wa.me/5522999109160?text=Oi, meu namorado, lindo, gostoso, maravilhoso, eu quero saber qual é meu presente, pode me falar, e eu prometo não brigar com você ou ficar chateada, porque você me disse antes da hora.";

function getRandomPosition() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const wordWidth = 100; // Ajuste conforme necessário
  const wordHeight = 50; // Ajuste conforme necessário

  const maxX = screenWidth - wordWidth;
  const maxY = screenHeight - wordHeight;

  const randomX = Math.min(Math.max(0, Math.random() * maxX), maxX);
  const randomY = Math.min(Math.max(0, Math.random() * maxY), maxY);

  return { x: randomX, y: randomY };
}

function showWord(index) {
  if (index >= words.length) {
    // Exibir o botão final
    const verPresenteButton = document.createElement("button");
    verPresenteButton.innerText = "VER PRESENTE";
    verPresenteButton.style.position = "fixed";
    verPresenteButton.style.top = "50%";
    verPresenteButton.style.left = "50%";
    verPresenteButton.style.transform = "translateX(-50%)";
    verPresenteButton.style.zIndex = "9999";

    verPresenteButton.addEventListener("click", () => {
      const confirmation1 = confirm("Tem certeza mesmo, Julia?");
      if (confirmation1) {
        const confirmation2 = confirm("Absoluta?");
        if (confirmation2) {
          const userInput = confirm("Clique em 'OK' para descobrir o presente.");
          if (userInput) {
            alert("Parabéns, você descobriu o presente!");
            // Redirecionar para o link após a mensagem de parabéns
            window.location.href = finalLinkUrl;
          }
        }
      }
    });

    document.body.appendChild(verPresenteButton);
    return;
  }

  const currentWord = words[index];

  const wordElement = document.createElement("div");
  wordElement.className = "word";
  wordElement.innerText = currentWord;

  const randomPosition = getRandomPosition();
  wordElement.style.left = `${randomPosition.x}px`;
  wordElement.style.top = `${randomPosition.y}px`;

  document.body.appendChild(wordElement);

  setTimeout(() => {
    wordElement.style.opacity = 0;
    setTimeout(() => {
      document.body.removeChild(wordElement);
      showWord(index + 1); // Chama recursivamente para a próxima palavra
    }, 500);
  }, 1000);
}

// Chame a função showWord inicialmente para começar o efeito.
showWord(0);