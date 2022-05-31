const currency_one = document.getElementById("currency-one");
const currency_two = document.getElementById("currency-two");
const amount_one = document.getElementById("amount-one");
const amount_two = document.getElementById("amount-two");
const rateElement = document.getElementById("rate");

const swap = document.getElementById("swap");
function calculate() {
  const currencyOne = currency_one.value;
  const currencyTwo = currency_two.value;

  fetch(
    `https://v6.exchangerate-api.com/v6/f71c99390322cc94f29358e6/latest/${currencyOne}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencyTwo];
      console.log(rate);
      rateElement.innerHTML = `1 ${currencyOne} = ${rate} ${currencyTwo} `;
      amount_two.value = (amount_one.value * rate).toFixed(3);
    });
}

// Event Listener
currency_one.addEventListener("change", calculate);
amount_one.addEventListener("input", calculate);

currency_two.addEventListener("change", calculate);
amount_two.addEventListener("input", calculate);

swap.addEventListener("click", () => {
  const temp = currency_one.value;
  currency_one.value = currency_two.value;
  currency_two.value = temp;
  calculate();
});

calculate();
