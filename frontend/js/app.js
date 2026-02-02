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

// Send email using EmailJS
function sendMail() {
  emailjs.send("service_e6seyel", "template_djvyh4h", {
    link: "https://akash241-coder.github.io/valentine"
  }).then(() => {
    alert("Mail sent 💌");
  });
}
