// Get a reference to the button element
const submitButtonIndex = document.getElementById("submitButton_indx");
const first_name_input_index = document.getElementById("first_name_input_index")
const last_name_input_index = document.getElementById("last_name_input_index")
const phone_number_input_index = document.getElementById("phone_number_input_index")

function isValid() {
  if (first_name_input_index.value.trim() === "" || last_name_input_index.value.trim() === "" || phone_number_input_index.value.trim() === "" ) {
    return alert("hmm, ensure to anser all questions before moving on.");
  } else {
    return true;
  }
}

// Add a click event listener to the button
submitButtonIndex.addEventListener("click", function() {
  // Redirect to a different HTML page when the button is clicked
  isFormValid = isValid();
  if (isFormValid) { 
    window.location.href = "second_page.html";
  } else {
    // soft handel via alert.
  }
});
