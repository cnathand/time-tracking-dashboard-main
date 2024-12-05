let dailyBtn = document.getElementById("dailyBtn");
let weeklyBtn = document.getElementById("weeklyBtn");
let monthlyBtn = document.getElementById("monthlyBtn");
let currentWork = document.getElementById("currentWork");
let previousWork = document.getElementById("previousWork");
let currentPlay = document.getElementById("currentPlay");
let previousPlay = document.getElementById("previousPlay");
let currentStudy = document.getElementById("currentStudy");
let previousStudy = document.getElementById("previousStudy");
let currentEx = document.getElementById("currentEx");
let previousEx = document.getElementById("previousEx");
let currentSocial = document.getElementById("currentSocial");
let previousSocial = document.getElementById("previousSocial");
let currentSelf = document.getElementById("currentSelf");
let previousSelf = document.getElementById("previousSelf");




async function dailyHours() {
    const promise = await fetch("./data.json")
    const data = await promise.json();
    displayTime("Yesterday - ", "daily", data)
}

async function weeklyHours() {
    const promise = await fetch("./data.json")
    const data = await promise.json();
    displayTime("Last Week - ", "weekly", data)
}

async function monthlyHours() {
    const promise = await fetch("./data.json")
    const data = await promise.json();
    displayTime("Last Month - ", "monthly", data)
}

function displayTime(day, dates, data) {

    currentWork.textContent = `${data[0].timeframes[`${dates}`].current}hrs`
    previousWork.textContent = `${day} ${data[0].timeframes[`${dates}`].previous}hrs`
    currentPlay.textContent = `${data[1].timeframes[`${dates}`].current}hrs`
    previousPlay.textContent = `${day} ${data[1].timeframes[`${dates}`].previous}hrs`
    currentStudy.textContent = `${data[2].timeframes[`${dates}`].current}hrs`
    previousStudy.textContent = `${day} ${data[2].timeframes[`${dates}`].previous}hrs`
    currentEx.textContent = `${data[3].timeframes[`${dates}`].current}hrs`
    previousEx.textContent = `${day} ${data[3].timeframes[`${dates}`].previous}hrs`
    currentSocial.textContent = `${data[4].timeframes[`${dates}`].current}hrs`
    previousSocial.textContent = `${day} ${data[4].timeframes[`${dates}`].previous}hrs`
    currentSelf.textContent = `${data[5].timeframes[`${dates}`].current}hrs`
    previousSelf.textContent = `${day} ${data[5].timeframes[`${dates}`].previous}hrs`
}



dailyBtn.addEventListener('click', function () {
    dailyHours();
});
weeklyBtn.addEventListener('click', function () {
    weeklyHours();
});
monthlyBtn.addEventListener('click', function () {
    monthlyHours();
});