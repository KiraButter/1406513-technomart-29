const btnDelivery = document.querySelector(".del");
const btnGuarantee = document.querySelector(".guar");
const btnCredit = document.querySelector(".cred");

const DeliveryBlock = document.querySelector(".service-delivery");
const GuaranteeBlock = document.querySelector(".service-guarantee");
const CreditBlock = document.querySelector(".service-credit");

btnDelivery.addEventListener("click", function() {
    event.preventDefault();
    DeliveryBlock.classList.remove("none");
    GuaranteeBlock.classList.remove("show");
    CreditBlock.classList.remove("show");
    btnDelivery.classList.add("services-item-current");
    btnGuarantee.classList.remove("services-item-current");
    btnCredit.classList.remove("services-item-current");
});

btnGuarantee.addEventListener("click", function() {
    event.preventDefault();
    GuaranteeBlock.classList.add("show");
    DeliveryBlock.classList.add("none");
    CreditBlock.classList.remove("show");
    btnGuarantee.classList.add("services-item-current");
    btnDelivery.classList.remove("services-item-current");
    btnCredit.classList.remove("services-item-current");

});

btnCredit.addEventListener("click", function() {
    event.preventDefault();
    CreditBlock.classList.add("show");
    GuaranteeBlock.classList.remove("show");
    DeliveryBlock.classList.add("none");
    btnCredit.classList.add("services-item-current");
    btnDelivery.classList.remove("services-item-current");
    btnGuarantee.classList.remove("services-item-current");
});