const mapLink = document.querySelector(".map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (event) {
  event.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      event.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});
