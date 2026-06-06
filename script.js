function generateQR() {

  const input = document.getElementById("qrInput").value;

  const qrContainer = document.getElementById("qrcode");

  qrContainer.innerHTML = "";

  if (input.trim() === "") {
    alert("Please enter a URL");
    return;
  }

  new QRCode(qrContainer, {
    text: input,
    width: 220,
    height: 220,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
  document.getElementById("downloadBtn").disabled = false;
}
function downloadQR() {
    const qrContainer = document.getElementById("qrcode");
    const img = qrContainer.querySelector("img");
    const canvas = qrContainer.querySelector("canvas");
    if (!img && !canvas) {
        alert("Please generate a QR code first.");
        return;
    }
    let imageURL;
    if (img) {
        imageURL = img.src;
    } else {
        imageURL = canvas.toDataURL("image/png");
    }
    const link = document.createElement("a");
    link.href = imageURL;
    link.download = "QRCode.png";
    link.click();
}
function resetQR(){
    document.getElementById("qrInput").value = ""
     document.getElementById("qrcode").innerHTML =""
     document.getElementById("downloadBtn").disabled = true;
}
