let speakersBtn = document.getElementById("speakers-btn")
let scheduleBtn = document.getElementById("schedule-btn")
let speakersDrop = document.querySelector(".speakers-drop")
let scheduleDrop = document.querySelector(".schedule-drop")

speakersBtn.onclick = () =>{
    if (speakersDrop.classList.contains("speakers-drop-hidden")){
        speakersDrop.classList.remove("speakers-drop-hidden")
    } else{
        speakersDrop.classList.add("speakers-drop-hidden")
    }

}


scheduleBtn.onclick = () =>{
    if (scheduleDrop.classList.contains("schedule-drop-hidden")){
        scheduleDrop.classList.remove("schedule-drop-hidden")
    } else{
        scheduleDrop.classList.add("schedule-drop-hidden")
    }
}


// EVENT SCHEDULE
let days = document.querySelectorAll(".day")
days.forEach((e)=>{
    e.addEventListener("click", daySwitch)
    console.log(e)
})

function daySwitch () {
    let target = event.target.parentElement
    target.classList.add("active")
    console.log(target)
}