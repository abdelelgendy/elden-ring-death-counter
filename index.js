const bgMusic = document.getElementById("bg-music");
const deathSound = new Audio("/audio/death.mp3");

bgMusic.volume     = 0.2;
deathSound.volume  = 0.4;
deathSound.preload = 'auto';
deathSound.load();


const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");
const saveBtn = document.getElementById("save-btn");
const dieBtn  = document.getElementById("die-btn");

// pull the last count from localStorage (or 0 if nothing’s there)
let count = parseInt(localStorage.getItem('deathCount') || '0', 10);
countEl.textContent = count;      // update the on‑screen number

let savedRuns = JSON.parse(localStorage.getItem("savedRuns") || "[]");
saveEl.textContent = savedRuns.map(c => c + " - ").join("");

dieBtn.addEventListener('click', increment);
saveBtn.addEventListener('click', save);


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
 // 1) record this run
  savedRuns.push(count);
  localStorage.setItem("savedRuns", JSON.stringify(savedRuns));

  // 2) update the UI
  saveEl.textContent += `${count} - `;

  // 3) reset counter on‑screen and in storage
  count = 0;
  countEl.textContent = "0";
  localStorage.setItem("deathCount", 0);
}

function toggleMute() {
  bgMusic.muted = !bgMusic.muted;
  const icon = document.getElementById("mute-icon");
  icon.src = bgMusic.muted ? "images/rune2.png" : "images/rune1.png";
}
