const username = document.querySelector(".name")
const deleteUser = document.querySelector(".dltUser")
const textArea = document.querySelector("#text-area")
const add = document.querySelector("#ekle") 
const spaceField = document.querySelector(".space")
const localStorageValue = localStorage.getItem("username")

username.value = localStorageValue;
let textAreaInfo = [];

function localStorageDeletion(pressedValue) {
    var storedNames = JSON.parse(localStorage.getItem("userInfo"));
    const deletedValues = storedNames.filter((value) => {
        return value !== pressedValue;
    });
    console.log(deletedValues);
    localStorage.setItem("userInfo", JSON.stringify(deletedValues));
}

function addTodos() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("inputvalfield");
    const checkBox = document.createElement("input")
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
    
    textAreaInfo.push(textArea.value);
    localStorage.setItem("userInfo", JSON.stringify(textAreaInfo))

    deleteBtn.addEventListener("click", function() {
        spaceField.removeChild(wrapper);
        localStorageDeletion(p.textContent);
    })
    textArea.value = "";
}

textArea.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        addTodos();
    }
})
add.addEventListener("click", function(){
    addTodos();
})
