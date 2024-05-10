document.addEventListener("DOMContentLoaded", function() {
  const textInput = document.getElementById("text");
  const delayInput = document.getElementById("delay");
  const outputDiv = document.getElementById("output");
  const submitButton = document.getElementById("btn");

  submitButton.addEventListener("click", async function() {
    const text = textInput.value;
    const delay = parseInt(delayInput.value);

    outputDiv.textContent = ""; // Clear previous output

    // Delay execution
    await new Promise(resolve => setTimeout(resolve, delay));

    // Display the text after the delay
    outputDiv.textContent = text;
  });
});
