const navul = document.querySelector(".nav-ul");
const toggleBtn = document.querySelector(".menu");

toggleBtn.addEventListener("click", () => {
  navul.classList.toggle("open");
});
