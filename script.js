let btn = document.getElementById("btn");
let boxElOne = document.getElementById("box-el-one");
let boxElTwo = document.getElementById("box-el-two");

btn.addEventListener("click", () => {
  let length = 8;
  let passwordCharacters =
    "BDVAuGQbFfWgZsNLMtTIXCepwy_irdPESl.moJxkHnjRUhvcOaqYKz";
  let password1 = "";

  for (i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * passwordCharacters.length);
    password1 += passwordCharacters[randomNumber];
  }
  boxElOne.textContent = password1;

  let passwordDigits = "0123456789";
  let password2 = "";

  for (i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * passwordDigits.length);
    password2 += passwordDigits[randomNumber];
  }

  boxElTwo.textContent = password2;
});

let copyToClipboard = () => {
  if (boxElOne.innerText !== "PASSWORD") {
    navigator.clipboard.writeText(boxElOne.innerText);
    boxElOne.innerText = "Copied!";
    boxElOne.style.display = "block";
    setTimeout(() => {
      boxElOne.innerText = "PASSWORD";
    }, 2000);
  }
};

let copyToClipboard2 = () => {
  if (boxElTwo.innerText !== "PIN") {
    navigator.clipboard.writeText(boxElTwo.innerText);
    boxElTwo.innerText = "Copied!";
    boxElTwo.style.display = "block";
    setTimeout(() => {
      boxElTwo.innerText = "PIN";
    }, 2000);
  }
};
