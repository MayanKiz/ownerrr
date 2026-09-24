const word = document.querySelector('#scramble-word');
const words = ['create', 'explore', 'iterate', 'imagine'];
const glyphs = '!<>/\\_01#*+-';
let wordIndex = 0;

function scrambleTo(nextWord) {
  const start = performance.now();
  const duration = 620;
  const current = word.textContent;

  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    const reveal = Math.floor(progress * nextWord.length);
    let output = '';
    for (let i = 0; i < nextWord.length; i += 1) {
      output += i < reveal ? nextWord[i] : glyphs[Math.floor(Math.random() * glyphs.length)];
    }
    word.textContent = output || current;
    if (progress < 1) requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

setInterval(() => {
  wordIndex = (wordIndex + 1) % words.length;
  scrambleTo(words[wordIndex]);
}, 2200);


const panelButtons = document.querySelectorAll('.loop-button');
const panels = document.querySelectorAll('.loop-panel');
let panelIndex = 0;

function showPanel(index) {
  panelIndex = index;
  panelButtons.forEach((button) => button.classList.toggle('is-active', Number(button.dataset.panel) === index));
  panels.forEach((panel) => panel.classList.toggle('is-active', Number(panel.dataset.panelContent) === index));
}

panelButtons.forEach((button) => button.addEventListener('click', () => showPanel(Number(button.dataset.panel))));
setInterval(() => showPanel((panelIndex + 1) % panels.length), 5200);
