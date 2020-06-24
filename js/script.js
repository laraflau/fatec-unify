window.onload = () => {
  const btnSandwich = document.querySelector(".menusd");

  const menu = document.querySelector("header .main ul");

  if (btnSandwich) {
    btnSandwich.addEventListener("click", () => {
      menu.classList.toggle("open")
    });
  }
}