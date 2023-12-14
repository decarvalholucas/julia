const words = ["Oi meu bem", "Eu sou programador", "você sabe", "então", "eu tive que", "fazer essa brincadeirinha", "mas", "enfim", "você realmente", "vai querer saber", "qual é seu presente?","...", "...","...", "...", "posso te contar","mas depois","você não pode","ficar chateada comigo","ok?","Te","Amo","❤️"];
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
      return; // Terminar a exibição quando todas as palavras foram mostradas
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
      }, 1000);
    }, 1000);
  }
  
  // Chame a função showWord inicialmente para começar o efeito.
  showWord(0);