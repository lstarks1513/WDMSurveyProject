// Get a reference to the button element
const submitButton = document.getElementById("submitButton");

// Add a click event listener to the button
submitButton.addEventListener("click", function() {
  // Redirect to a different HTML page when the button is clicked
  console.log("Hit");
  window.location.href = "Team-Project-WDM/pages/second_page.html";
});
