const scrollButton = document.getElementById("scrollBtn");
const targetSection = document.getElementById("targetSec");

scrollButton.addEventListener("click", () => {
  const targetPosition = targetSection.offsetTop;
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth"
  });
});

const scrollButtonn = document.getElementById("scrollBtn1");
const targetSectionn = document.getElementById("targetSec1");

scrollButtonn.addEventListener("click", () => {
  const targetPosition = targetSection.offsetTop;
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth"
  });
});


function showButton() {
  let checkbox = document.getElementById("myCheckbox");
  let button = document.getElementById("myButton");

  if (checkbox.checked) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function showDescription(product) {
  let cards = document.getElementsByClassName("cards");
  for (var i = 0; i < cards.length; i++) {
    let card = cards[i];
    let title = card.getElementsByTagName("h2")[0].textContent;
    let description = card.getElementsByClassName("description")[0].textContent;
    if (title === product) {
      document.getElementById("descriptionDisplay").textContent = description;
      document.getElementById("descriptionDisplay").style.display = "block";
    }
  }
}