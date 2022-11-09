const enter = document.querySelector("#enter")
const textPlace = document.querySelector("#text_place")
const header = document.querySelector("h3")
console.log(enter.value)

function enterence () {
    if(textPlace.value != localStorage["username"]) {
        localStorage.clear();
        localStorage["username"] = textPlace.value;
    }
    let textValue = localStorage.getItem("username");
    !textValue 
        ? header.classList.add("error")
        : (location.href='homepage.html');
    
}
enter.addEventListener("click",function(){
    enterence();
})

textPlace.addEventListener("keypress", function (e){
    if (e.key == "Enter") {
        enterence(); 
    }
})