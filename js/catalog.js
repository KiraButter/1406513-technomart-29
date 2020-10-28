var buttons = document.querySelectorAll(".btn-buy");
var orderPopup = document.querySelector(".modal-order");
var orderClose = orderPopup.querySelector(".modal-close");

buttons.forEach ( (btnBuy) => {
    btnBuy.addEventListener("click", function () {
        event.preventDefault();
        orderPopup.classList.add("modal-show");
    });
}
);


orderClose.addEventListener("click", function(event) {
    event.preventDefault();
    orderPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (orderPopup.classList.contains("modal-show")) {
            event.preventDefault();
            orderPopup.classList.remove("modal-show");
        }
    }
});