// Noakhali donation functionality
document
  .getElementById("noakhali-donation-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputValue = document.getElementById("noakhali-donation").value;
    const balance = getTextValueById("balance");
    if (inputValue <= 0 || isNaN(inputValue) || inputValue > balance) {
      alert("Please Enter Valid Amount");
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
  });

// Feni donation functionality
document
  .getElementById("feni-donation-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputValue = document.getElementById("feni-donation").value;
    const balance = getTextValueById("balance");
    if (inputValue <= 0 || isNaN(inputValue) || inputValue > balance) {
      alert("Please Enter Valid Amount");
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
  });

// Quota donation functionality
document
  .getElementById("quota-donation-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputValue = document.getElementById("quota-donation").value;
    const balance = getTextValueById("balance");
    if (inputValue <= 0 || isNaN(inputValue) || inputValue > balance) {
      alert("Please Enter Valid Amount");
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
  });
