document.addEventListener("DOMContentLoaded", function () {
  let carouselInner = document.querySelector(".carousel_inner");
  let cards = carouselInner.querySelectorAll(".card");
  let dotsContainer = document.querySelector(".dots");

  // Tilføjer dots nav til HTML
  cards.forEach((_, index) => {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.dataset.index = index;
    dotsContainer.appendChild(dot);
  });

  let dots = document.querySelectorAll(".dot");

  // Function til at vise et specifikt kort
  function showCard(index) {
    cards.forEach((card, idx) => {
      card.classList.remove("active");
      dots[idx].classList.remove("active");
      if (idx === index) {
        card.classList.add("active");
        dots[idx].classList.add("active");
      }
    });
  }

  // Event listeners til buttons
  document.querySelector(".prev").addEventListener("click", () => {
    let index = [...cards].findIndex((card) => card.classList.contains("active"));
    showCard((index - 1 + cards.length) % cards.length);
  });

  document.querySelector(".next").addEventListener("click", () => {
    let index = [...cards].findIndex((card) => card.classList.contains("active"));
    showCard((index + 1) % cards.length);
  });

  // Event listeners til dots
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      let index = parseInt(dot.dataset.index);
      showCard(index);
    });
  });
});

// flip funktion
let card = document.querySelector(".carousel_inner");

card.addEventListener("click", function () {
  if (card.classList.contains("active")) {
    card.classList.remove("active");
  } else {
    card.classList.add("active");
  }
});

// FORMULAR
function toggleFormFields() {
  var registrationType = document.getElementById("hvem").value;
  var elevFields = document.getElementById("studentFields");
  var klasseFields = document.getElementById("ClassFields");

  if (registrationType === "student") {
    elevFields.style.display = "block";
    klasseFields.style.display = "none";
  } else if (registrationType === "class") {
    elevFields.style.display = "none";
    klasseFields.style.display = "block";
  } else {
    elevFields.style.display = "none";
    klasseFields.style.display = "none";
  }
}

// Kald toggleFormFields() når siden indlæses for at sikre, at det rigtige sæt formularfelter vises
toggleFormFields();
