let elCard1 = document.querySelector(".card1")
let elCard2 = document.querySelector(".card2")
let elCard3 = document.querySelector(".card3")
let elBtn = document.querySelector(".btn")

function changeColors(){
    setTimeout(()=> {
        elCard1.classList.add("red")
        elCard2.classList.remove("yellow")
        elCard3.classList.remove("green")
    },1000)
    setTimeout(()=> {
        elCard2.classList.add("yellow")
        elCard1.classList.remove("red")
        elCard3.classList.remove("green")
    },3000)
    setTimeout(()=> {
        elCard3.classList.add("green")
        elCard1.classList.remove("red")
        elCard2.classList.remove("yellow")
    },5000)
}
changeColors()
setInterval(() => {
    changeColors()
},7000)

elBtn.addEventListener("click", () => {
    elBtn.classList.toggle("hayr")
    if (elBtn.classList[1]){
        clearInterval(changeColors)
    }
    else{
        setInterval(() => {
    changeColors()
},7000)
    }
})