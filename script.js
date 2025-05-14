function generateTestCases() {
  const feature = document.getElementById("featureInput").value.trim();
  const output = document.getElementById("testCasesOutput");

  if (feature === "") {
    output.textContent = "Please enter a feature description.";
    return;
  }

  // Placeholder - later you’ll replace with API call
  output.innerHTML = `
✅ Basic Case:\nCheck if "${feature}" works under normal conditions.\n\n
🟢 Positive Case:\nTest when user follows expected steps with valid inputs.\n\n
🔴 Negative Case:\nTest when user provides invalid or edge case inputs.
  `;
}
