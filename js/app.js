document.addEventListener("DOMContentLoaded", () => {
  const name = window.ENV.GIRL_NAME;

  document.querySelectorAll(".girl-name").forEach(el => {
    el.textContent = name;
  });

  moveNoButton();
  floatingHearts();
});

function moveNoButton() {
  const noBtn = document.getElementById("noBtn");
  if (!noBtn) return;

  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  });
}

function floatingHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }, 300);
}
