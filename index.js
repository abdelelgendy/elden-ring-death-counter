const bgMusic = document.getElementById("bg-music");
const deathSound = new Audio("/audio/death.mp3");

bgMusic.volume     = 0.2;
deathSound.volume  = 0.4;
deathSound.preload = 'auto';
deathSound.load();


const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");

// pull the last count from localStorage (or 0 if nothing’s there)
let count = parseInt(localStorage.getItem('deathCount') || '0', 10);
countEl.textContent = count;      // update the on‑screen number



function increment() {
  if (bgMusic.paused) {
    bgMusic.play().catch(err => {
      console.warn("Autoplay blocked:", err);
    });
  }

  deathSound.currentTime = 0;
  deathSound.play();

  count += 1;
  countEl.textContent = count;
  localStorage.setItem('deathCount', count);

}

function save() {
  const countStr = count + " - ";
  saveEl.textContent += countStr;
  count = 0;
  countEl.textContent = count;
}

function toggleMute() {
  bgMusic.muted = !bgMusic.muted;
  const icon = document.getElementById("mute-icon");
  icon.src = bgMusic.muted ? "images/rune2.png" : "images/rune1.png";
}
