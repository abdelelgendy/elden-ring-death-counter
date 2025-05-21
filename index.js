const deathSound = new Audio('audio/death.mp3');
deathSound.preload = "auto";
const bgMusic = document.getElementById("bg-music");
bgMusic.volume = 0.2;      // Background music 
deathSound.volume = 0.5;   

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  if (bgMusic.paused) {
    bgMusic.play();
  }
  deathSound.currentTime = 0;
  deathSound.play();
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}

function toggleMute() {
  bgMusic.muted = !bgMusic.muted;
  const icon = document.getElementById("mute-icon");
  icon.src = bgMusic.muted ? "images/rune2.png" : "images/rune1.png";
}
