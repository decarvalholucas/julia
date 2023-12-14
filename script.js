const words = ["Oi meu bem", "Eu sou programador", "você sabe", "então", "eu tive que", "fazer essa brincadeirinha", "mas", "enfim", "você realmente", "vai querer saber", "qual é seu presente?","...", "...","...", "...", "posso te contar","mas depois","você não pode","ficar chateada comigo","ok?","Te","Amo","❤️"];
const finalImageUrl = "https://secure-static.vans.com.br/medias/sys_master/vans/vans/h41/h8c/h00/h00/11397873860638/1003500430051U-01-BASEIMAGE-Hires.jpg";
const finalLinkUrl = "https://www.vans.com.br/tenis-ultrarange-rapidweld-black-white/p/1003500430051U";

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
    // Exibir a imagem final
    const finalImageElement = document.createElement("img");
    finalImageElement.src = finalImageUrl;
    finalImageElement.alt = "Final Image";
    finalImageElement.style.width = "100%";
    finalImageElement.style.height = "auto";
    finalImageElement.style.position = "fixed";
    finalImageElement.style.top = "0";
    finalImageElement.style.left = "0";
    finalImageElement.style.zIndex = "9999";

    finalImageElement.addEventListener("click", () => {
      window.location.href = finalLinkUrl;
    });

    document.body.appendChild(finalImageElement);
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