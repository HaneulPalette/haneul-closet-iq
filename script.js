function analyze() {
  const input = document.getElementById("imageInput");

  if (!input.files.length) {
    alert("Please upload an image first.");
    return;
  }

  // Show preview + payment
  document.getElementById("preview").classList.remove("hidden");
  document.getElementById("payment").classList.remove("hidden");
  document.getElementById("locked").classList.remove("hidden");
}
