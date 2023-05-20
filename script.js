function openPopUp() {
  popup.classList.add("open-popup");
}

function displayLink() {
  const num = document.getElementById("number").value;
  const msg = document.getElementById("message").value;
  const url = "https://wa.me/";
  const finalUrl = `${url}${num}?text=${msg}`;
  document.getElementById("displayLink").innerHTML = finalUrl;
  const openWhatsapp = document.getElementById("open-whatsapp-btn");
  openWhatsapp.onclick = function () {
    window.location.href = finalUrl;
  };
}

function createLink() {
  openPopUp();
  displayLink();
}

const copybtn = document.getElementById("copy-text-btn");

copybtn.onclick = function () {
  var copyTxt = document.getElementById("displayLink");
  copyTxt.select();
  navigator.clipboard.writeText(copyTxt.value);
};

const qrInput = document.querySelector(".link-generate-form textarea");
const qrImg = document.querySelector(".link-generate-form img");
generateBtn = document.querySelector(".homepage button");

generateBtn.addEventListener("click", () => {
  const qrValue = qrInput.value;
  if (!qrValue) return;
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
});
