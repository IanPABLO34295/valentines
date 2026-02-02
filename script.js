// ============================
// ELEMENTS
// ============================
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const submitBtn = document.getElementById("submitBtn");
const contactInput = document.getElementById("contactInput");
const mainCard = document.getElementById("mainCard");
const formCard = document.getElementById("formCard");
const music = document.getElementById("music");
const iconsContainer = document.querySelector(".floating-icons");

// ============================
// BACKGROUND MUSIC
// ============================
document.body.addEventListener(
  "click",
  () => {
    if (music) {
      music.volume = 0.5;
      music.play().catch(() => {});
    }
  },
  { once: true }
);

// ============================
// FLOATING ICONS
// ============================
const icons = ["💖", "💘", "💕", "🌹", "✨", "🥰"];

for (let i = 0; i < 30; i++) {
  const span = document.createElement("span");
  span.textContent = icons[Math.floor(Math.random() * icons.length)];
  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = 8 + Math.random() * 10 + "s";
  iconsContainer.appendChild(span);
}

// ============================
// NO BUTTON RUNS AWAY
// ============================
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// ============================
// YES BUTTON CLICK
// ============================
yesBtn.addEventListener("click", () => {
  mainCard.classList.add("hidden");
  formCard.classList.remove("hidden");
});

// ============================
// SUBMIT → WHATSAPP (RELIABLE)
// ============================
submitBtn.addEventListener("click", () => {
  const value = contactInput.value.trim();

  if (!value) {
    alert("Come on Gatho 😌 drop your number or email");
    return;
  }

  // ⚠️ IMPORTANT:
  // Replace this with YOUR REAL WhatsApp number
  // Format: 2547XXXXXXXX (NO +, NO spaces)
  const yourWhatsAppNumber = "254790571618"; // <-- CHANGE THIS

  const message = encodeURIComponent(
    `💖 SHE SAID YES 💖

Gatho agreed to be my Valentine 😍

📞 Contact: ${value}

Date plan loading... 🍷🌹✨`
  );

  // ✅ MOST RELIABLE WHATSAPP URL
  const whatsappURL = `https://api.whatsapp.com/send?phone=${yourWhatsAppNumber}&text=${message}`;

  // Open WhatsApp
  window.open(whatsappURL, "_blank");

  // ============================
  // SUCCESS SCREEN
  // ============================
  document.body.innerHTML = `
    <div style="
      height:100vh;
      background: linear-gradient(-45deg, #ff9a9e, #fad0c4);
      display:flex;
      justify-content:center;
      align-items:center;
      text-align:center;
      color:#4a0033;
      font-family:Poppins, sans-serif;
    ">
      <div>
        <h1 style="font-size:65px;">💖 It’s a Date 💖</h1>
        <p style="font-size:22px; margin-top:20px;">
          Valentine secured 🌹<br>
          I can’t wait to spoil you, Gatho 🥰
        </p>
      </div>
    </div>
  `;
});

