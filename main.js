const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#amt-check");
const errMessage = document.querySelector("#error-message");
const nextButton = document.querySelector("#nxt");

hideMessage();
checkButton.addEventListener("click", function validateAmounts() {
  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      calculateExhange(amountToBeReturned);
    } else {
      showErrorMessage("Do you wanna wash plates??");
    }
  } else {
    showErrorMessage("Invalid amount has been entered");
  }
});

function hideMessage() {
  errMessage.style.display = "none";
}

function showErrorMessage(mail) {
  errMessage.style.display = "block";
  errMessage.innerText = mail;
}

function calculateExhange() {}

document.getElementById("rtn").addEventListener("click", newPage);
function newPage() {
  document.location.reload();
}
