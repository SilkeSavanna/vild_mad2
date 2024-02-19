const carousel = document.querySelector(".carousel");
const dots = document.querySelectorAll(".dot");
const cards = document.querySelectorAll(".card");

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    changeSlide(index);
  });
});

function changeSlide(index) {
  cards.forEach((card, i) => {
    if (i === index) {
      card.classList.add("active");
      dots[i].classList.add("active");
    } else {
      card.classList.remove("active");
      dots[i].classList.remove("active");
    }
  });
}
