// // checkAge=(Age)=>{

// // }


// function checkAge(age){
// if(age >= 18){
//     return "Adult";
// } else {
//     return "Minor"
// }
// }

// function users(){
//     return{
//         name:"Amin",
//         Age:"18"
//     }
// }

// const years=[1995, 2020, 2019, 2009, 1997]
// const age=[]

// for(let i=0; i<years.length; i++){
// age.push(2025-years[i])
// }
// // if age was above 18 push them in new arry named (Adult) if not push them in (Minor) arry
// console.log(age)

// const aminInformation={
//     fName:"Amin",
//     lName:"JF",
//     job:"Creative Developer",
//     birthYear:2006,
//     friends:["Parsa","Alireza","Amir"],
//     liveInIran:true,
//     calcAge(){
//     //  let fullName = this.fName + this.lName
//      let age = 2025 - this.birthYear
//      return age
//     }
// }

// // console.log(aminInformation.calcAge())

// const key=prompt("enter your key")
// if(aminInformation[key]){
//     if(Array.isArray(aminInformation[key])){
//         for(let i=0; i<aminInformation[key].length;i++){
//             console.log(aminInformation[key][i])
//         }
//     }else{
//         alert(aminInformation[key])
//     }
// }else{
//     alert("wrong key")
// }


// const divEl=document.getElementById("Div")


// const navEl=document.getElementById("navbar")
// const txtEl=document.getElementsByClassName("txt")
// txtEl[1].style.color="Yellow"


const navEl= document.querySelector("#navbar")
const txtEl=document.querySelectorAll(".txt")
const divEl= document.querySelectorAll(".Div")

console.log(txtEl, divEl)
navEl.style.backgroundColor="red"
navEl.style.color="blue"
navEl.style.padding="15px"

// navEl.innerHTML="<h1>Hello world</h1>"

txtEl[2].textContent="Products"
txtEl[3].textContent="Product detail"

for(let i=0; i<txtEl.length; i++){
    txtEl[i].textContent += " Page"
    txtEl[i].classList.add("dark")
    txtEl[i].classList.remove("txt")
}