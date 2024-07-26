document.getElementById("name").addEventListener("input", function (event) {
  const input = event.target;
  const value = input.value;
  const regex = /^[a-zA-Z\s]*$/;
  if (!regex.test(value)) {
    input.value = value.replace(/[^a-zA-Z\s]/g, "");
  }
});

document.getElementById("message").addEventListener("input", function (event) {
  const input = event.target;
  const value = input.value;
  const maxLength = 100;
  if (value.length > maxLength) {
    input.value = value.substring(0, maxLength);
  }
});
