const titleEl = document.querySelector(".title");
titleEl.innerText = "Hello from JavaScript";
titleEl.style.color = "red";
const navEl = document.querySelector("#navbar");
const txtEl = document.querySelectorAll(".txt");
const divEl = document.querySelectorAll(".Div");

console.log(txtEl, divEl)
// navEl.style.backgroundColor="red"
// navEl.style.color="blue"
navEl.style.padding="20px"
navEl.style.borderRadius="15px"
// navEl.style.display="flex"
// x = y
// y = x
txtEl[2].textContent="Hello"
txtEl[3].textContent="Products"

for(let i=0; i<txtEl.length; i++){
    txtEl[i].textContent += " Page"
    txtEl[i].classList.add("dark")
    // txtEl[i].classList.remove("txt")
}


