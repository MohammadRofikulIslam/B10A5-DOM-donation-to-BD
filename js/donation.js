// Noakhali donation functionality
document
  .getElementById("noakhali-donation-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputValue = document.getElementById("noakhali-donation").value;
    const balance = getTextValueById("balance");
    if (inputValue <= 0 || isNaN(inputValue)) {
      alert("Please Enter Valid Amount");
      return;
    }
    else if(inputValue > balance){
      alert("You Don't Have Enough Balance")
      return;
    }
    document.getElementById("my_modal_5").showModal();

    const donationAmount = getInputValueById("noakhali-donation");
    const noakhaliDonationTotal = getTextValueById("noakhali-donation-total");
    const noakhaliDonationTotalUpdated = noakhaliDonationTotal + donationAmount;
    document.getElementById("noakhali-donation-total").innerText =
      noakhaliDonationTotalUpdated;
    const balanceUpdated = balance - donationAmount;
    document.getElementById("balance").innerText = balanceUpdated;
    document.getElementById("noakhali-donation").value = "";

    const now = new Date();
    const cardTitle = document.getElementById("card-title-1").innerText;
    const historyContainer = document.getElementById("history-container");
    const div = document.createElement("div");
    div.innerHTML = `
<div class="border border-gray-300 bg-white p-5 rounded-xl">
          <h4 class="font-bold">${inputValue} Taka is ${cardTitle}</h4>
          <p class="text-gray-500">Date : ${now} </p>
        </div>
`;
    historyContainer.appendChild(div);
  });

// Feni donation functionality
document
  .getElementById("feni-donation-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputValue = document.getElementById("feni-donation").value;
    const balance = getTextValueById("balance");
    if (inputValue <= 0 || isNaN(inputValue)) {
      alert("Please Enter Valid Amount");
      return;
    }
    else if(inputValue > balance){
      alert("You Don't Have Enough Balance")
      return;
    }
    document.getElementById("my_modal_5").showModal();

    const donationAmount = getInputValueById("feni-donation");
    const noakhaliDonationTotal = getTextValueById("feni-donation-total");
    const noakhaliDonationTotalUpdated = noakhaliDonationTotal + donationAmount;
    document.getElementById("feni-donation-total").innerText =
      noakhaliDonationTotalUpdated;
    const balanceUpdated = balance - donationAmount;
    document.getElementById("balance").innerText = balanceUpdated;
    document.getElementById("feni-donation").value = "";

    const now = new Date();
    const cardTitle = document.getElementById("card-title-2").innerText;
    const historyContainer = document.getElementById("history-container");
    const div = document.createElement("div");
    div.innerHTML = `
<div class="border border-gray-300 bg-white p-5 rounded-xl">
          <h4 class="font-bold">${inputValue} Taka is ${cardTitle}</h4>
          <p class="text-gray-500">Date : ${now} </p>
        </div>
`;
    historyContainer.appendChild(div);
  });

// Quota donation functionality
document
  .getElementById("quota-donation-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputValue = document.getElementById("quota-donation").value;
    const balance = getTextValueById("balance");
    if (inputValue <= 0 || isNaN(inputValue)) {
      alert("Please Enter Valid Amount");
      return;
    }
    else if(inputValue > balance){
      alert("You Don't Have Enough Balance")
      return;
    }
    document.getElementById("my_modal_5").showModal();

    const donationAmount = getInputValueById("quota-donation");
    const noakhaliDonationTotal = getTextValueById("quota-donation-total");
    const noakhaliDonationTotalUpdated = noakhaliDonationTotal + donationAmount;
    document.getElementById("quota-donation-total").innerText =
      noakhaliDonationTotalUpdated;
    const balanceUpdated = balance - donationAmount;
    document.getElementById("balance").innerText = balanceUpdated;
    document.getElementById("quota-donation").value = "";

    const now = new Date();
    const cardTitle = document.getElementById("card-title-3").innerText;
    const historyContainer = document.getElementById("history-container");
    const div = document.createElement("div");
    div.innerHTML = `
<div class="border border-gray-300 bg-white p-5 rounded-xl">
          <h4 class="font-bold">${inputValue} Taka is donated for ${cardTitle}</h4>
          <p class="text-gray-500">Date : ${now} </p>
        </div>
`;
    historyContainer.appendChild(div);
  });

// Donation Button Functionality
document.getElementById("btn-donation").addEventListener("click", function () {
  document
    .getElementById("btn-donation")
    .classList.add("font-bold", "bg-lime-400", "hover:bg-lime-400");
  document
    .getElementById("btn-donation")
    .classList.remove("border", "border-gray-300", "bg-white");

  document
    .getElementById("btn-history")
    .classList.remove("font-bold", "bg-lime-400", "hover:bg-lime-400");
  document
    .getElementById("btn-history")
    .classList.add("border", "border-gray-300", "bg-white");

  document.getElementById("donation-section").classList.remove("hidden");
  document.getElementById("history-container").classList.add("hidden");
  document.getElementById("footer").classList.remove("hidden");
});
