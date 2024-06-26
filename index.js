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
let service=""
function showDescription(product) {
  let cardss = document.getElementsByClassName("cards");
  for (let i = 0; i < cardss.length; i++) {
    let card = cardss[i];
    let title = card.getElementsByTagName("h2")[0].textContent;
    let description = card.getElementsByClassName("description")[0].textContent;
    if (title === product) {
      console.log("inline");
      document.getElementById("selectedServiceId").textContent = description;
      document.getElementById("selectedServiceId").style.display = "block";
     service = product
    }
  }
}


const submitButton=document.getElementById("submit_button")

submitButton.addEventListener("click", async() => {
  const firstName = document.getElementById('tbFirstName').value
  const LastName = document.getElementById('tbLastName').value
  const telRange = document.getElementById('tbTelRange').value
  const AreaCode = document.getElementById('tbAreaCode').value
  const mobile = document.getElementById('tbMobile').value

  const url = "https://store.pishgaman.net/Order/SubmitOrder";
  const data = {
    selectedServiceId: service,
    tbFirstName : firstName,
    tbLastName : LastName,
    tbTelRange : telRange,
    tbAreaCode : AreaCode,
    tbMobile : mobile,

};

await fetch(url, {
    method: 'POST', 
    // mode:"cors",
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data) 
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); 
})
.then(data => {
    console.log('Success:', data); 
})
.catch((error) => {
    console.error('Error:', error);
});
});


function validateFormAndItems() {
  let tbFirstName = document.getElementById('tbFirstName').value.trim();
  let tbLastName = document.getElementById('tbLastName').value.trim();
  let tbAreaCode = document.getElementById('tbAreaCode').value.trim();
  let tbTelRange = document.getElementById('tbTelRange').value.trim();
  let tbMobile = document.getElementById('tbMobile').value.trim();
  
  if (tbFirstName === '' || tbLastName === '' || tbAreaCode === '' || tbTelRange === '' || tbMobile === '') {
    alert('لطفا تمام فیلدهای فرم را پر کنید');
    return false;
  }

  let selectedServiceDiv = document.getElementById('selectedServiceId');

  if (selectedServiceDiv.style.display === 'none') {
    let selectedItems = document.querySelectorAll('.selected-item');
    
    if (selectedItems.length === 0) {
      alert('لطفا سرویس مورد نظر خود را انتخاب نمایید.');
      return false;
    }
  } else {
    const success = 
    document.getElementById("submit_button").addEventListener("click", () => {
    let alertElement = document.getElementById("alertMessage");

    alertElement.innerHTML = "همکاران ما به زودی با شما تماس میگیرند";
    alertElement.style.display = "block";
});
console.log(success)
  }

  return true;
}