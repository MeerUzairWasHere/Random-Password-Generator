let btn = document.getElementById("btn");
let boxElOne = document.getElementById("box-el-one");
let boxElTwo = document.getElementById("box-el-two");

btn.addEventListener("click", () => {
  let length = 8
  let passwordCharacters =

    "8BD1VAuGQbFfW6gZ9sNL7M0tTIX52Cepwy_4irdPESl.moJxkHnjRUhvcOa3qYKz";
  let password1 = "";

  for (i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * passwordCharacters.length);
    password1 += passwordCharacters[randomNumber];
  }
  boxElOne.textContent = password1;

  let password2 = "";

  for (i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * passwordCharacters.length);
    password2 += passwordCharacters[randomNumber];
  }

  boxElTwo.textContent = password2;
});

// function generatePassword  (length = 8) {
//   let passwordCharacters =
//     "8BD1VAuGQbFfW6gZ9sNL7M0tTIX52Cepwy_4irdPESl.moJxkHnjRUhvcOa3qYKz";
//   let password1 = "";

//   for (i = 0; i < length; i++) {
//     let randomNumber = Math.floor(Math.random() * passwordCharacters.length);
//     password1 += passwordCharacters[randomNumber];
//   }

//   boxElOne.innerText = password1;

//   let password2 = "";

//   for (i = 0; i < length; i++) {
//     let randomNumber = Math.floor(Math.random() * passwordCharacters.length);
//     password2 += passwordCharacters[randomNumber];
//   }

//   boxElTwo.innerText = password2;

// };

let copyToClipboard = () => {
  navigator.clipboard.writeText(boxElOne.innerText);
  boxElOne.innerText = "Copied!";
  boxElOne.style.display = "block";
};

let copyToClipboard2 = () => {
  navigator.clipboard.writeText(boxElTwo.innerText);
  boxElTwo.innerText = "Copied!";
  boxElTwo.style.display = "block";
};
