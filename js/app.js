emailjs.init(CONFIG.PUBLIC_KEY);

function goToLove() {
  window.location.href = 'love.html';
}

function goToSurprise() {
  window.location.href = 'surprise.html';
}

// No button runs away
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

// Send email
function sendMail() {
  emailjs.send(CONFIG.SERVICE_ID, CONFIG.TEMPLATE_ID, {
    link: CONFIG.SITE_LINK
  }).then(() => {
    alert("Mail sent 💌");
  });
}
