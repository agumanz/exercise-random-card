const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const symbols = ['♠', '♥', '♦', '♣'];

let timerId;

function startTimer() {
  changeCard(); // Llama a changeCard() inmediatamente al iniciar el timer
  timerId = setInterval(changeCard, 10000); // Cambia la carta cada 10 segundos
}

function stopTimer() {
  clearInterval(timerId); // Detiene el temporizador
}

function changeCard() {
  // Generar un índice aleatorio para el valor y el símbolo
  const randomValueIndex = Math.floor(Math.random() * values.length);
  const randomSymbolIndex = Math.floor(Math.random() * symbols.length);
  
  // Obtener el valor y el símbolo aleatorio del arreglo
  const randomValue = values[randomValueIndex];
  const randomSymbol = symbols[randomSymbolIndex];

  // Actualizar el contenido de la carta en el HTML
  const cardDisplay = document.getElementById('cardDisplay');

  const valueSpan = cardDisplay.querySelector('.value');
  valueSpan.textContent = randomValue;

  const symbolSpans = cardDisplay.querySelectorAll('.symbol');
  symbolSpans[0].textContent = randomSymbol;
  symbolSpans[1].textContent = randomSymbol;

  // Remover la clase 'red' de todos los símbolos
  symbolSpans.forEach(symbolSpan => symbolSpan.classList.remove('red'));

  // Agregar la clase 'red' a los símbolos de corazones y diamantes
  if (randomSymbol === '♥' || randomSymbol === '♦') {
    symbolSpans.forEach(symbolSpan => symbolSpan.classList.add('red'));
  }
}