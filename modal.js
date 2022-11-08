"use strict";
const userInfo = document.querySelector(".name");
const modalContainer = document.querySelector(".modal-container");
const backdrop = document.querySelector(".backdrop");
const closeBtn = document.querySelector(".close-button");
const deleteUser = document.querySelector(".deleteuser");
const pFonts = document.querySelectorAll(".font-names");
const themeColor = document.querySelectorAll(".theme-color");
var bodyField = document.body;
const fontCard = document.querySelectorAll(".font-card");
const themeStyle = document.getElementById("ThemeStyle");
// set theme

let themeData =
  localStorage.getItem("selectedTheme") ||
  localStorage.setItem("selectedTheme", "");

function themeStyleAttirbute(themeInfo) {
  themeStyle.setAttribute("href", `./Style/theme/${themeInfo}.css`);
}

themeColor.forEach((themeCard) => {
  themeCard.addEventListener("click", function changeTheme() {
    const selectedColor = themeCard.classList[1];
    localStorage.setItem("selectedTheme", selectedColor);
    themeStyleAttirbute(selectedColor);
  });
});

// font names created with Array
const fontNames = ["Kanit", "Merriweather", "Roboto", "Shalimar"];
// font card text changes
pFonts.forEach((font, index) => {
  font.style.fontFamily = fontNames[index];
});
/* when font selected, update the body font family
   save this in localstorage function */
fontCard.forEach((card) => {
  card.addEventListener("click", function () {
    localStorage.setItem("selectedFont", JSON.stringify(card.innerText));
    bodyField.style.fontFamily = card.innerText;
    window.add.style.fontFamily = card.innerText;
    window.textArea.style.fontFamily = card.innerText;
    window.username.style.fontFamily = card.innerText;
    window.logout.style.fontFamily = card.innerText;
  });
});
// font input search then return the search values function
function inputHandler() {
  const fontInputValues = document.querySelector(".font-input").value;
  fontCard.forEach((card) => {
    if (card.innerText.toLowerCase().includes(fontInputValues)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}

// deleting localstorage values function
deleteUser.addEventListener("click", function () {
  localStorage.removeItem("todos") &
    localStorage.removeItem("username") &
    localStorage.removeItem("selectedFont");
  location.href = "index.html";
});
// set modal visibility function
const modalVisibility = function () {
  modalContainer.style.display = "block";
};
// set Modal display to hidden function
const modalHidden = function () {
  modalContainer.style.display = "none";
};

userInfo.addEventListener("click", modalVisibility);

closeBtn.addEventListener("click", modalHidden);
backdrop.addEventListener("click", modalHidden);

themeStyleAttirbute(themeData);
