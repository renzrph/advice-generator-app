const btnEl = document.getElementById("dice-btn");
const advice = document.getElementById("advice");
const adviceNumber = document.getElementById("advice-number");
const url = "https://api.adviceslip.com/advice";

btnEl.addEventListener("click", () => {
  advice.textContent = "Loading...";
  adviceNumber.textContent = "";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      advice.textContent = data.slip.advice;
      adviceNumber.textContent = `ADVICE #${data.slip.id}`;
    })
    .catch((error) => {
      console.log("Error:", error);
      advice.textContent =
        "Error: Failed to fetch advice. Please try again later.";
    });
});
