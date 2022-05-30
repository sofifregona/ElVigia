const inputs = document.querySelectorAll(".input-content");
const inputSubject = document.querySelector(".content-special");
const subject = document.querySelector(".subject");
const formButton = document.querySelector(".form-button");
const message = document.querySelector(".message");

window.addEventListener("click", (event) => {
  if (event.target.classList[0] === "button-input-content") {
    subject.style.display = "block";
  } else {
    subject.style.display = "none";
  }
  if (event.target.classList[0] === "subject-element") {
    inputSubject.value = event.target.innerHTML;
  }
});

formButton.addEventListener("click", (event) => {
  let formValue = true;
  message.classList.remove("message--active");
  event.preventDefault();
  inputs.forEach((input) => {
    if (!input.validity.valid) {
      formValue = false;
    }
  });
  if (!formValue) {
    message.innerHTML =
      "Por favor, complete los campos obligatorios con el formato correspondiente.";
    message.classList.add("message--active");
  } else {
    message.innerHTML = "¡Mensaje enviado!";
    message.classList.add("message--active");
    inputs.forEach((input) => {
      if (!input.classList.contains("content-special")) {
        input.value = "";
      }
    });
  }
  setTimeout(() => {
    message.classList.remove("message--active");
  }, 3000);
  setTimeout(() => {
    message.innerHTML = "";
  }, 4000);
});
