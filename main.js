const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#amt-check");
const errMessage = document.querySelector("#error-message");
const nextButton = document.querySelector("#nxt");
const cashArea = document.querySelector("cash-area");
const givingReturn = document.querySelectorAll("return-given");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateAmounts() {
  hideErrorMessage();
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

function hideErrorMessage() {
  errMessage.style.display = "none";
}

function showErrorMessage(mail) {
  errMessage.style.display = "block";
  errMessage.innerText = mail;
}

nextButton.addEventListener("click", () => {
  if (billAmount.value) {
    cashArea.style.display = "block";
    nextButton.style.display = "none";
  }
});

function calculateExhange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned %= availableNotes[i];
    givingReturn.innerText = numberOfNotes;
  }
}

document.getElementById("rtn").addEventListener("click", newPage);
function newPage() {
  document.location.reload();
}
