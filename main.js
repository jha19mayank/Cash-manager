const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#amt-check");
const errMessage = document.querySelector("#error-message");
const exchangeToReturn = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateAmounts() {
  hideErrorMessage();
  if (billAmount.value > 0) {
    if (Number(cashGiven.value) >= Number(billAmount.value)) {
      const amountToBeReturned =
        Number(cashGiven.value) - Number(billAmount.value);
      calculateExhange(amountToBeReturned);
    } else {
      showErrorMessage("Do you wanna wash plates??");
    }
  } else {
    showErrorMessage("Invalid amount has been entered");
  }
});

function hideErrorMessage() {
  errMessage.style.display = "none";
}

function showErrorMessage(mail) {
  errMessage.style.display = "block";
  errMessage.innerText = mail;
}

function calculateExhange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned %= availableNotes[i];
    exchangeToReturn[i].innerText = numberOfNotes;
  }
}

document.getElementById("rtn").addEventListener("click", newPage);
function newPage() {
  document.location.reload();
}
