"use strict";
const userInfo = document.querySelector(".name");
const modalContainer = document.querySelector(".modal-container");
const backdrop = document.querySelector(".backdrop");
const closeBtn = document.querySelector(".close-button");
const deleteUser = document.querySelector(".deleteuser");
const fontInput = document.querySelector(".font-input");
const pFonts = document.querySelectorAll(".font-names");
const themeColor = document.querySelectorAll(".theme-color");
const bodyField = document.body;
const fontNames = ["Kanit", "Merriweather", "Roboto", "Shalimar"];
// font card text changes
pFonts.forEach((font, index) => {
  font.style.fontFamily = fontNames[index];
});

// function themeChange(selected, themeInfo) {
//   if (themeInfo === "dark") {
//     selected.classList.add("dark-theme");
//   } else if (themeInfo === "very-dark") {
//     selected.classList.add("high-contrast");
//   } else {
//     selected.classList.contains(themeInfo)
//       ? selected.classList.remove("dark-theme")
//       : selected.classList.remove("very-dark");
//   }
// }

// themeColor.forEach((selected) => {
//   console.log(selected.classList[1]);
//   selected.addEventListener(
//     "click",
//     themeChange(bodyField, selected.classList[1])
//   );
// });

function inputFilter(e) {
  console.log(e);
}

fontInput.addEventListener("keypress", inputFilter);
// deleting localstorage values
deleteUser.addEventListener("click", function () {
  localStorage.removeItem("todos") & localStorage.removeItem("username");
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
