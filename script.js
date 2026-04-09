function showBullets() {
    document.getElementById('bullet-points').style.display = 'block';
}


function showBullets() {
  const fileInput = document.getElementById("pdfUpload");
  const bullets = document.getElementById("bullet-points");
  const loading = document.getElementById("loading");

  if (fileInput.files.length > 0) {
    // show loading
    loading.style.display = "block";
    bullets.style.display = "none";

    // simulate AI processing delay
    setTimeout(() => {
      loading.style.display = "none";
      bullets.style.display = "block";
    }, 3000);
  }
}