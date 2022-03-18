const numbersList = document.querySelectorAll(".number");
const textsList = document.querySelectorAll(".text");

function removeClass(array) {
  array.forEach(element => {
    element.classList.remove("active");
  });
}

function addClass(element, classAdded) {
  element.classList.add(classAdded);
}

numbersList.forEach((number, index) => {
  number.addEventListener("click", () => {
    removeClass(numbersList);

    removeClass(textsList);

    addClass(number, "active");

    addClass(textsList[index], "active");
  });
});
