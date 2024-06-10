
const buttonScroll = document.getElementById("buttonScroll");
const sectionTarget = document.getElementById("sectionTarget");

scrollButton.addEventListener("click", () => {
  const targetPosition = targetSection.offsetTop;
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth"
  });
});

const buttonScroll1 = document.getElementById("buttonScroll1");
const sectionTarget1 = document.getElementById("sectionTarget");

scrollButton.addEventListener("click", () => {
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