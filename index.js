//lavet en function, der skal gøres når Dom'en er loaded
document.addEventListener("DOMContentLoaded", function () {
  // laver min titel og navs om til const
  const title = document.querySelector(".title");
  const navs = document.querySelectorAll(".foraging_nav, .activities_nav, .quiz_nav");

  title.classList.add("fade-in"); //Sat en fade-in class, som får titlen til at fade ind, når siden er loadet færdig.

  let delay = 500; //variabel for hvor meget delay, der er imellem hver navs' fade-in (500 millisekunder, som er 0.5 sekunder)

  // bruger forEach, som bruger denne function for at få fat i alle mine navs. Animationen "fade-in" og delay er tilføjet.
  navs.forEach((nav) => {
    setTimeout(() => {
      nav.classList.add("fade-in");
    }, delay);
    delay += 200; // <-- 200 millisekunder, for hvis jeg gerne vil tilføje mere delay mellem mine navs .
  });
});
