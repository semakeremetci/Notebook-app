let enter = document.querySelector("#enter")
let textPlace = document.querySelector("#text_place")
console.log(textPlace.innerHTML)

enter.addEventListener("click",function (e) {
    localStorage["username"] = textPlace.value;
})