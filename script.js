let speakersBtn = document.getElementById("speakers-btn")
let scheduleBtn = document.getElementById("schedule-btn")
let speakersDrop = document.querySelector(".speakers-drop")
let scheduleDrop = document.querySelector(".schedule-drop")

speakersBtn.onclick = () => {
    if (speakersDrop.classList.contains("speakers-drop-hidden")) {
        speakersDrop.classList.remove("speakers-drop-hidden")
    } else {
        speakersDrop.classList.add("speakers-drop-hidden")
    }

}


scheduleBtn.onclick = () => {
    if (scheduleDrop.classList.contains("schedule-drop-hidden")) {
        scheduleDrop.classList.remove("schedule-drop-hidden")
    } else {
        scheduleDrop.classList.add("schedule-drop-hidden")
    }
}


// EVENT SCHEDULE
let days = document.querySelectorAll(".day")
days.forEach((e) => {
    e.addEventListener("click", daySwitch)
    console.log(e)
})

function daySwitch() {
    let target = event.target.parentElement
    console.log(target.classList)
    if (target.classList.contains("day")) {
        target.classList.add("active")
        // select the rest and remove the active class
        let inactiveDays = document.querySelectorAll(".day")
        inactiveDays.forEach((e) => {
            if (e != target) {
                e.classList.remove("active")
            }
        })
    }
}


// testimonials - click and make active, change order

let testimonials = document.querySelectorAll(".testimonial")

// DISABLE ON MOBILE DEVICES

testimonials.forEach((e) => {
    e.onclick = function (e) {

        let card = e.target.parentElement.parentElement

        let cards = document.querySelectorAll(".testimonial")
        let otherCards = []
        cards.forEach((item) => {
            if (item != card) {
                otherCards.push(item)
            }
        })
        console.log(otherCards)
        if (window.innerWidth > 1000) {
            card.style.order = 2
            card.classList.add("test-act")
            card.classList.remove("test-inact")
            otherCards[0].style.order = 1
            otherCards[0].classList.remove("test-act")
            otherCards[0].classList.add("test-inact")
            otherCards[1].style.order = 3
            otherCards[1].classList.remove("test-act")
            otherCards[1].classList.add("test-inact")
        }
    }
})





// photo gallery

let leftBtn = document.getElementById("leftBtn")
let rightBtn = document.getElementById("rightBtn")
let photos = document.querySelector(".photos")
let swipedLeft = false
let swipedRight = false
let offset = 0

leftBtn.onclick = function () {
    if (offset > -380) {
        offset -= 380
        photos.style.transform = `translateX(${offset}px)`
    }
}
rightBtn.onclick = function () {
    if (offset < 380) {
        offset += 380
        photos.style.transform = `translateX(${offset}px)`
    }
}