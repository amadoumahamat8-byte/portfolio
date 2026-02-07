const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

// Ouvrir / fermer menu au clic sur ☰
menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  navMenu.classList.toggle("open");
});

// Fermer le menu quand on clique sur un lien
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");

    // gestion lien actif
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Fermer le menu quand on clique en dehors
document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
    navMenu.classList.remove("open");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Active button
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      cards.forEach((card) => {
        const type = card.dataset.type;

        if (filter === "all" || type === filter) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });
});

// ===================== SCROLL ANIMATION =====================

const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ===================== TYPEWRITER EFFECT =====================

const titleText = "BIENVENUE SUR MON PORTFOLIO";
const subtitleText = "Je suis ";

const nameText = "Mahamat Amadou Gombo";

const titleEl = document.getElementById("typewriter-title");
const subtitleEl = document.getElementById("typewriter-subtitle");
const nameEl = document.getElementById("typewriter-name");

let titleIndex = 0;
let subtitleIndex = 0;
let nameIndex = 0;

function typeTitle() {
  if (titleIndex < titleText.length) {
    titleEl.textContent += titleText.charAt(titleIndex);
    titleIndex++;
    setTimeout(typeTitle, 70);
  } else {
    setTimeout(typeSubtitle, 400);
  }
}

function typeSubtitle() {
  if (subtitleIndex < subtitleText.length) {
    subtitleEl.textContent += subtitleText.charAt(subtitleIndex);
    subtitleIndex++;
    setTimeout(typeSubtitle, 60);
  } else {
    setTimeout(typeName, 200);
  }
}

function typeName() {
  if (nameIndex < nameText.length) {
    nameEl.textContent += nameText.charAt(nameIndex);
    nameIndex++;
    setTimeout(typeName, 60);
  }
}

window.addEventListener("load", typeTitle);

// ===================== FORCE SCROLL TO TOP ON RELOAD =====================

window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
  history.replaceState(null, null, " ");
});
