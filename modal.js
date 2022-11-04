"use strict";
const userInfo = document.querySelector(".name");
const modalContainer = document.querySelector(".modal-container");
const backdrop = document.querySelector(".backdrop");
const closeBtn = document.querySelector(".close-button");
const deleteUser = document.querySelector(".deleteuser");
const pFonts = document.querySelectorAll(".font-names");
const themeColor = document.querySelectorAll(".theme-color");
const bodyField = document.body;
const fontCard = document.querySelectorAll(".font-card");
const fontNames = ["Kanit", "Merriweather", "Roboto", "Shalimar"];
// font card text changes
pFonts.forEach((font, index) => {
  font.style.fontFamily = fontNames[index];
});

fontCard.forEach((card) => {
  card.addEventListener("click", function () {
    localStorage.setItem("selectedFont", JSON.stringify(card.innerText));
    bodyField.style.fontFamily = card.innerText;
    location.reload();
  });
});

function inputHandler() {
  const fontInputValues = document.querySelector(".font-input").value;
  fontCard.forEach((card) => {
    // console.log(value.innerText);
    if (card.innerText.toLowerCase().includes(fontInputValues)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}

// deleting localstorage values
deleteUser.addEventListener("click", function () {
  localStorage.removeItem("todos") &
    localStorage.removeItem("username") &
    localStorage.removeItem("selectedFont");
  location.href = "index.html";
});

const modalVisiblity = function () {
  modalContainer.style.display = "block";
};
const modalHidden = function () {
  modalContainer.style.display = "none";
};

userInfo.addEventListener("click", modalVisiblity);

closeBtn.addEventListener("click", modalHidden);
backdrop.addEventListener("click", modalHidden);
