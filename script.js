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
}

function resetQR(){
    document.getElementById("qrInput").value = ""
     document.getElementById("qrcode").innerHTML =""
}
