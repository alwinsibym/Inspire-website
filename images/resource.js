// Copy code to clipboard
function copyToClipboard(id) {
  const codeElement = document.getElementById(id);
  const codeText = codeElement.innerText;

  navigator.clipboard
    .writeText(codeText)
    .then(() => {
      alert("Code copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}
