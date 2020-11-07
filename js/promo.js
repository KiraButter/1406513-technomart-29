var btnBack = document.querySelector(".btn-back");
var btnNext = document.querySelector(".btn-next");
var item1 = document.querySelector(".item-1");
var item2 = document.querySelector(".item-2");
var btnRadioNext = document.querySelector(".btn-radio-next");
var btnRadioBack = document.querySelector(".btn-radio-back");

btnNext.addEventListener("click", function() {
    item2.classList.add("show");
    item1.classList.add("none");
    btnRadioNext.classList.remove("active-btn-radio");
    btnRadioBack.classList.add("active-btn-radio");
});

btnBack.addEventListener("click", function() {
    item2.classList.remove("show");
    item1.classList.remove("none");
    btnRadioBack.classList.remove("active-btn-radio");
    btnRadioNext.classList.add("active-btn-radio");
});