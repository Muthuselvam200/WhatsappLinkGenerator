function openPopUp () {
  popup.classList.add("open-popup");
}

function displayLink () {
  const num = document.getElementById('number').value;
  const msg = document.getElementById('message').value;
  const url = "https://wa.me/";
  const finalUrl = `${url}${num}?text=${msg}`;
  document.getElementById('linkDisplay').innerHTML = finalUrl;
  const openWhat = document.getElementById('openWhatsapp');
  openWhat.onclick = function (){
    window.location.href = finalUrl;
  }

}

function createLink () {
  openPopUp();
  displayLink();
}

const copybtn = document.getElementById("copyBtn");

copybtn.onclick = function () {
  var copyTxt = document.getElementById("linkDisplay");
  copyTxt.select();
  navigator.clipboard.writeText(copyTxt.value);
}

const qrInput = document.querySelector(".formTwo textarea");
const qrImg = document.querySelector(".formTwo img")
generateBtn = home.querySelector(".home button");

generateBtn.addEventListener("click", () => {
  const qrValue = qrInput.value;
  if (!qrValue) return;
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
});