var containerEl = document.querySelector(".container")
var currentDayEl = document.getElementById("currentDay")
function loadCurrent() {
    var currentDay = moment().format("ddd, MMMM Do YYYY");
    currentDayEl.textContent = currentDay
}

loadCurrent()

var beginningTime = moment().format("HH")
console.log(beginningTime)

//var endTime = 





// look up the moment.js current hour (to compare the time with the work hour)
// look through previous mods/assignment for for each *employee
// add something to html to compare with beginning time