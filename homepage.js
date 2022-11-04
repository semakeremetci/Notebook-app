"use strict";

const username = document.querySelector(".name");
const textArea = document.querySelector("#text-area");
const add = document.querySelector("#ekle");
const spaceField = document.querySelector(".space");
const localStorageValue = localStorage.getItem("username");
const bodyFieldArea = document.body;
const logout = document.querySelector(".logout");
console.log(logout);
username.value = localStorageValue;
let data = localStorage.getItem("todos");
let textAreaInfo = data ? JSON.parse(data) : [];

let fontType = localStorage.getItem("selectedFont");
let fontInfo = fontType ? JSON.parse(fontType) : [];

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
  deleteBtn.style.fontFamily = fontInfo;
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
    deleteBtn.style.fontFamily = fontInfo;
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

bodyFieldArea.style.fontFamily = fontInfo;
add.style.fontFamily = fontInfo;
textArea.style.fontFamily = fontInfo;
username.style.fontFamily = fontInfo;
logout.style.fontFamily = fontInfo;
