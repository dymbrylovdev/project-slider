const sectionTitle = document.querySelector(".section-title")
const sectionPhoto = document.querySelector(".section-photo")
const container = document.querySelector(".container")

const btnUp = document.querySelector(".btn-up")
const btnDown= document.querySelector(".btn-down")

let photoCount = sectionPhoto.querySelectorAll("div").length

let active = 0

sectionTitle.style.top = `-${(photoCount-1)*100}vh`



btnUp.addEventListener("click", ()=> {
    clickBtn("up")
})
btnDown.addEventListener("click", ()=> {
    clickBtn("down")
})

document.addEventListener("wheel", function (event){
    if(event.wheelDelta>0){
        clickBtn("up")
    }else {
        clickBtn("down")
    }
})


function clickBtn(item){
    if(item==="up"){
        active++
        if(active===photoCount){
            active=0
        }
    }else if(item==="down"){
        active--
        if(active<0){
            active=photoCount-1
        }
    }

    const height = container.clientHeight
    sectionPhoto.style.transform = `translateY(-${active * height}px)`
    sectionTitle.style.transform = `translateY(${active * height}px)`

}