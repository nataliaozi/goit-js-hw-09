// Funkcja, która generuje losowy kolor w formacie #xxxxxx
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Przyciski Start i Stop
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

// Zmienna do przechowywania interwału
let intervalId;

// Funkcja, która zmienia kolor tła
function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

// Funkcja, która uruchamia zmianę koloru co sekundę
function startColorChange() {
  intervalId = setInterval(changeBackgroundColor, 1000);
  startButton.disabled = true; // Wyłączamy przycisk "Start"
  stopButton.disabled = false; // Włączamy przycisk "Stop"
}

// Funkcja, która zatrzymuje zmianę koloru
function stopColorChange() {
  clearInterval(intervalId); // Zatrzymujemy zmianę koloru
  startButton.disabled = false; // Włączamy przycisk "Start"
  stopButton.disabled = true; // Wyłączamy przycisk "Stop"
}

// Podłączamy eventy do przycisków
startButton.addEventListener('click', startColorChange);
stopButton.addEventListener('click', stopColorChange);
