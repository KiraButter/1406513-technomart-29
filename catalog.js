const buttons = document.querySelectorAll(".btn-buy");
const orderPopup = document.querySelector(".modal-order");
const orderClose = orderPopup.querySelector(".modal-close");

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
//elements.forEach((item) => { item.addEventListener(event, callback []) })