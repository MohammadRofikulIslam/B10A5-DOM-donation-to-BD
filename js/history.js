document.getElementById("btn-history").addEventListener("click", function () {
  document
    .getElementById("btn-history")
    .classList.add("font-bold", "bg-lime-400", "hover:bg-lime-400");
  document
    .getElementById("btn-history")
    .classList.remove("border", "border-gray-300", "bg-white");

  document
    .getElementById("btn-donation")
    .classList.remove("font-bold", "bg-lime-400", "hover:bg-lime-400");
  document
    .getElementById("btn-donation")
    .classList.add("border", "border-gray-300", "bg-white");

  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("history-container").classList.remove("hidden");
  document.getElementById("footer").classList.add("hidden");
});
