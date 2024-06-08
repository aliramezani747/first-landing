
const scrollButton = document.getElementById("scrollButton");
const targetSection = document.getElementById("targetSection");

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