const API = 'http://localhost:3000/api/config';

async function loadConfig() {
  const res = await fetch(API);
  const data = await res.json();

  const q = document.getElementById('question');
  if (q) {
    q.innerText = `${data.name}, ${data.message}`;
  }

  const giftsDiv = document.getElementById('gifts');
  if (giftsDiv) {
    data.gifts.forEach((link, i) => {
      const a = document.createElement('a');
      a.href = link;
      a.target = '_blank';
      a.innerText = `🎁 Gift ${i + 1}`;
      a.style.display = 'block';
      a.style.margin = '10px';
      giftsDiv.appendChild(a);
    });
  }
}

function goToLove() {
  window.location.href = 'love.html';
}

function goToSurprise() {
  window.location.href = 'surprise.html';
}

// ❌ NO button runs away
const noBtn = document.getElementById('noBtn');
if (noBtn) {
  noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  });
}

loadConfig();
