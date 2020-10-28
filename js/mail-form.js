var mailButton = document.querySelector(".mail-btn");
var mailPopup = document.querySelector(".modal-mail");
var mailClose = mailPopup.querySelector(".modal-close");
var mailForm = mailPopup.querySelector(".mail-form");
var username = mailPopup.querySelector(".form-username");
var usermail = mailPopup.querySelector(".form-usermail");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("username");
} catch (err) {
  isStorageSupport = false;
}

mailButton.addEventListener("click", function () {
    event.preventDefault();
    mailPopup.classList.add("modal-show");

    if (storage) {
        username.value = storage;
        usermail.focus();
    } else{
    username.focus();
    }
});

mailClose.addEventListener("click", function(event) {
    event.preventDefault();
    mailPopup.classList.remove("modal-show");
    mailPopup.classList.remove("modal-error");
});

mailForm.addEventListener("submit", function(event) {
    if (!username.value || !usermail.value) {
        event.preventDefault();
        mailPopup.classList.remove("modal-error");
        mailPopup.offsetWidth = mailPopup.offsetWidth;
        mailPopup.classList.add("modal-error");
    }
    else {
        if (isStorageSupport) {
            localStorage.setItem("username", username.value);
        }
    }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (mailPopup.classList.contains("modal-show")) {
            event.preventDefault();
            mailPopup.classList.remove("modal-show");
            mailPopup.classList.remove("modal-error");
        }
    }
});