document.getElementById("savings-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get user inputs
    var investment = parseFloat(document.getElementById("investment").value);
    var monthlyBill = parseFloat(document.getElementById("monthly-bill").value);
  
    // Calculate savings
    var savingsPerMonth = monthlyBill * 0.1;
    var savingsPerYear = savingsPerMonth * 12;
    var paybackPeriod = investment / savingsPerMonth;
  
    // Display the result
    var savingsResult = document.getElementById("savings-result");
    savingsResult.innerHTML = "By investing $" + investment.toFixed(2) + " in solar panels, you can save approximately $" + savingsPerMonth.toFixed(2) + " per month and $" + savingsPerYear.toFixed(2) + " per year. The payback period is approximately " + paybackPeriod.toFixed(1) + " months.";
    savingsResult.style.display = "block";
  });
  