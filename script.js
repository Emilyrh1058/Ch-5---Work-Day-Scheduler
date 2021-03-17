var containerEl = document.querySelector(".container")
console.log(containerEl)

var currentDayEl = document.getElementById("currentDay")
console.log(currentDayEl)

function loadCurrent() {
    var currentDay = moment().format("ddd, MMMM Do YYYY");
    currentDayEl.textContent = currentDay
}

loadCurrent()