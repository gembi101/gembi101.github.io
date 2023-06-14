// JavaScript code (script.js)
const form = document.getElementById("savings-form");
const resultDiv = document.getElementById("savings-result");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const investment = document.getElementById("investment").value;
  const monthlyBill = document.getElementById("monthly-bill").value;

  // Calculation logic
  const savings = monthlyBill * 12; // Adjust this calculation based on your specific formula

  // Display the result
  resultDiv.textContent = `With an investment of $${investment} in solar panels, you can save approximately $${savings} per year on your electricity bill.`;

  // Clear the form inputs
  form.reset();
});
