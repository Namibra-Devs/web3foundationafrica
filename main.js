window.addEventListener("DOMContentLoaded", () => {

  const menu = document.querySelector(".menu");
  const bars = document.querySelector(".bars");
  const open = document.querySelector(".open");
  const close = document.querySelector(".close");

  // close menu when clicking on a link
  const links = document.querySelectorAll(".menu ul a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
      open.classList.remove("hidden");
      close.classList.add("hidden");
    });
  });

  // close menu when clicking outside
  window.addEventListener("click", (e) => {
    if (
      e.target !== menu &&
      e.target !== bars &&
      e.target !== open &&
      e.target !== close &&
      !menu.contains(e.target)
    ) {
      menu.classList.add("hidden");
      open.classList.remove("hidden");
      close.classList.add("hidden");
    }
  });

  bars.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    open.classList.toggle("hidden");
    close.classList.toggle("hidden");

    console.log("Clicked!");
  });

  //   Toggle for accordion
  const accordions = document.querySelectorAll(".accordion");

  // Toggle accordion content when clicking on a toggle element
  accordions.forEach((accordion) => {
    accordion.addEventListener("click", () => {
      const toggler = accordion.querySelector(".toggle");
      const line = accordion.querySelector(".line");

      toggler.classList.toggle("hidden");
      line.classList.toggle("hidden");
    });
  });

  //   Get current year for footer
  const year = document.getElementById("year");
  year.textContent = new Date().getFullYear();


});
