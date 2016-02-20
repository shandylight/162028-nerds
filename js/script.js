var link = document.querySelector(".btn-contacts");
var popup = document.querySelector(".order-content");
var close = popup.querySelector(".order-close");
var form = popup.querySelector("form");
var username = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=email]");
var storage = localStorage.getItem("username");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("order-show");

  if (storage) {
    username.value = storage;
    email.focus();
  } else {
    username.focus();
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("order-show");
});

form.addEventListener("submit", function(event) {
  if (!username.value || !email.value) {
    event.preventDefault();
    console.log("Нужно ввести имя и e-mail");
  } else {
    localStorage.setItem("username", username.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("order-show")) {
      popup.classList.remove("order-show");
    }
  }
});
