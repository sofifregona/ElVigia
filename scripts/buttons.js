buttons = document.querySelectorAll(".nav-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = `${button.name}.html`;
  });
});
