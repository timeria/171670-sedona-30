const link = document.querySelector(".main-form-button");
const popup = document.querySelector(".form-wrap");
const form = popup.querySelector("form");
const dateStart = popup.querySelector("[name=datestart]");
const adult = popup.querySelector("[name=adult]");
const children = popup.querySelector("[name=children]");

let isStorageSupport = true;
const storageDateStart = "";

try {
  storageDateStart = localStorage.getItem("dateStart");
} catch (err) {
  isStorageSupport = false;
}

if (storageDateStart) {
  dateStart.value = storageDateStart;
  dateEnd.focus();
} else {
  dateStart.focus();
}

link.addEventListener("click", function () {
  if(popup.classList.contains("form-show")) {
    popup.classList.remove("form-show");
  } else {
    popup.classList.add("form-show");
  }
})

form.addEventListener("submit", function (evt) {
  if(isStorageSupport) {
    localStorage.setItem("dateStart", dateStart.value);
    localStorage.setItem("adult", adult.value);
    localStorage.setItem("children", children.value);
  }
})

window.addEventListener("keydown", function (evt) {
  if(evt.keyCode === 27) {
    if(popup.classList.contains("form-show")) {
      evt.preventDefault();
      popup.classList.remove("form-show");
    }
  }
})
