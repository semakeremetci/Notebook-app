"use strict";
var username = document.querySelector(".name");
var textArea = document.querySelector("#text-area");
var add = document.querySelector("#ekle");
const spaceField = document.querySelector(".space");
const localStorageValue = localStorage.getItem("username");
const bodyFieldArea = document.body;
var logout = document.querySelector(".logout");
username.value = localStorageValue;
let data = localStorage.getItem("todos");
let textAreaInfo = data ? JSON.parse(data) : [];

let fontType = localStorage.getItem("selectedFont");
let fontInfo = fontType ? JSON.parse(fontType) : [];

// 1 time page refresh after load page
window.onload = function() {
  if(!window.location.hash) {
      window.location = window.location + '#loaded';
      window.location.reload();
  }
}

let themeColorType = localStorage.getItem("selectedTheme");
let themeInfo = themeColorType ? themeColorType : "default";

function themeColorSelection(themeInfo) {
  themeStyle.setAttribute("href", `./Style/theme/${themeInfo}.css`);
}

function fontTypeInfo(fontInfo) {
  bodyFieldArea.style.fontFamily = fontInfo;
  add.style.fontFamily = fontInfo;
  textArea.style.fontFamily = fontInfo;
  username.style.fontFamily = fontInfo;
  logout.style.fontFamily = fontInfo;
}

// local storage deletion improvement!!!
function localStorageDeletion(pressedValue) {
  const indexInfo = textAreaInfo.indexOf(pressedValue);
  const newTextAreaInfo = textAreaInfo.splice(indexInfo, 1);
  console.log(newTextAreaInfo);
  console.log(textAreaInfo);
  localStorage.setItem("todos", JSON.stringify(textAreaInfo));
}

function addTodos() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("inputvalfield");
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  const p = document.createElement("p");
  const deleteBtn = document.createElement("button");
  p.textContent = textArea.value;
  deleteBtn.textContent = "Sil";
  deleteBtn.classList.add("deletebtn");
  wrapper.appendChild(checkBox);
  wrapper.appendChild(p);
  wrapper.appendChild(deleteBtn);
  spaceField.appendChild(wrapper);
  textAreaInfo.push(p.textContent);
  localStorage.setItem("todos", JSON.stringify(textAreaInfo));

  deleteBtn.addEventListener("click", function () {
    spaceField.removeChild(wrapper);
    localStorageDeletion(p.textContent);
  });
  textArea.value = "";
}
// add todos in a localstorage and create DOM elements to see in a browser
function addtodoslocalstorage(data) {
  data.forEach((value) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("inputvalfield");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    const p = document.createElement("p");
    const deleteBtn = document.createElement("button");
    p.textContent = value;
    deleteBtn.textContent = "Sil";
    deleteBtn.classList.add("deletebtn");
    wrapper.appendChild(checkBox);
    wrapper.appendChild(p);
    wrapper.appendChild(deleteBtn);
    spaceField.appendChild(wrapper);

    deleteBtn.addEventListener("click", function () {
      spaceField.removeChild(wrapper);
      localStorageDeletion(p.textContent);
    });
  });
}

textArea.addEventListener("keypress", function (e) {
  if ((e.key == "Enter") & (textArea.value.length > 0)) {
    addTodos();
  }
});

add.addEventListener("click", function () {
  if (textArea.value.length > 0) {
    addTodos();
  }
});

if (textAreaInfo.length > 0) {
  addtodoslocalstorage(textAreaInfo);
}

fontTypeInfo(fontInfo);
