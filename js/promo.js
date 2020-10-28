var btnBack = document.querySelector(".btn-back");
var btnNext = document.querySelector(".btn-next");
var item1 = document.querySelector(".item-1");
var item2 = document.querySelector(".item-2");

btnNext.addEventListener("click", function() {
    item2.classList.add("show");
    item1.classList.add("none");
});

btnBack.addEventListener("click", function() {
    item2.classList.remove("show");
    item1.classList.remove("none");
});