window.onload = function () {
  var title = document.querySelector(".title");
  var navs = document.querySelectorAll(".center.none");
  var fadeInApplied = false;

  // Funktion for at fjerne fade-in animation
  function removeFadeInAnimation(element) {
    element.classList.remove("fade-in");
    fadeInApplied = true;
  }

  //En  add eventlistener for, at når musen hover på en nav, skal den fjerne den fade-in animation
  function addFadeInListener(navElement) {
    navElement.addEventListener("mouseenter", function () {
      if (!fadeInApplied) {
        removeFadeInAnimation(navElement);
      }
    });
  }

  //funktion for at fjerne klassen "none" (display: none), og tilføjer fade-in animation, som langsomt viser navs på forsiden.
  setTimeout(function () {
    title.classList.remove("none");
    title.classList.add("fade-in");

    //denne fade-in animation er tilføjet på hver af mine navs med: navs.Foreach.
    navs.forEach(function (nav, index) {
      setTimeout(function () {
        nav.classList.remove("none");
        nav.classList.add("fade-in");
      }, (index + 1) * 300); //  får et delay på 300 millisekunder imellem dem.
    });
  });

  //Adder kun disse eventlisternes på mine nav, hvis mit mediaquery er aktiv (når den er større end 700px))
  if (window.matchMedia("(min-width: 700px)").matches) {
    navs.forEach(addFadeInListener);

    //stopper fade-in animationen, for når musen ikke hover på musen længere (stopper fade-animationen at kicke ind igen)
    document.querySelectorAll(".center").forEach(function (navElement) {
      navElement.addEventListener("mouseleave", function () {
        fadeInApplied = true;
        navElement.classList.remove("fade-in");
      });
    });
  }
};
