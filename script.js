const hearts = ['❤️', '💕', '💖', '💘'];
const flowers = ['🌸', '🌼', '🌷', '🌹'];

function createFloaty(container, symbols, className) {
  setInterval(() => {
    const elem = document.createElement('div');
    elem.className = className;
    elem.innerText = symbols[Math.floor(Math.random() * symbols.length)];
    elem.style.left = Math.random() * 100 + 'vw';
    elem.style.top = '100vh';
    elem.style.fontSize = (Math.random() * 20 + 20) + 'px';
    container.appendChild(elem);
    
    setTimeout(() => elem.remove(), 6000);
  }, 500);
}

// Ensure the DOM is ready before running the JS
document.addEventListener("DOMContentLoaded", () => {
  const heartsContainer = document.querySelector('.hearts');
  const flowersContainer = document.querySelector('.flowers');

  if (heartsContainer && flowersContainer) {
    createFloaty(heartsContainer, hearts, 'heart');
    createFloaty(flowersContainer, flowers, 'flower');
  }
});
