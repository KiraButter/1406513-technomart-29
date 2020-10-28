
const btnBack = document.querySelector(".btn-back");
const btnNext = document.querySelector(".btn-next");
const item1 = document.querySelector(".item-1");
const item2 = document.querySelector(".item-2");

btnNext.addEventListener("click", function() {
    item2.classList.add("show");
    item1.classList.add("none");
});

btnBack.addEventListener("click", function() {
    item2.classList.remove("show");
    item1.classList.remove("none");
});