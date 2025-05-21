const bgMusic = document.getElementById("bg-music");
const deathSound = new Audio("audio/death.mp3");

bgMusic.volume = 0.2;      // softer background music
deathSound.volume = 0.5;   // slightly louder death sound
deathSound.preload = "auto"; // preloads the sound

let count = 0;
const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");

function increment() {
  // Start music only after user interaction
  if (bgMusic.paused) {
    bgMusic.play().catch(err => {
      console.warn("Autoplay blocked:", err);
    });
  }

  deathSound.currentTime = 0;
  deathSound.play();

  count += 1;
  countEl.textContent = count;
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
