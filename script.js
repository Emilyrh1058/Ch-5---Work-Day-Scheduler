

var displayCurrent = document.getElementById("currentDay")
var todayDateTime = moment().format("dddd, MMMM Do YYYY, h:mm a");

function loadCurrent() {
displayCurrent.innerHTML = todayDateTime
}
loadCurrent();

$("currentDay").html(todayDateTime);

$(document).ready(function() {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

// color change
function timeTracker() {
    var beginningTime = moment().hour();
console.log(beginningTime);
    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id"));

        
console.log($(this).children()[1]);
        if (blockTime < beginningTime) {
            $(this).children().eq(1).removeClass("future");
            $(this).children().eq(1).removeClass("present");
            $(this).children().eq(1).addClass("past");
        }
        else if (blockTime === beginningTime) {
            $(this).children().eq(1).removeClass("past");
            $(this).children().eq(1).removeClass("future");
            $(this).children().eq(1).addClass("present");
        }
        else {
            $(this).children().eq(1).removeClass("present");
            $(this).children().eq(1).removeClass("past");
            $(this).children().eq(1).addClass("future");
        }
    })
}
timeTracker();
let interval = setInterval (timeTracker, 30000);

$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour1 .description").val(localStorage.getItem("hour1"));
$("#hour2 .description").val(localStorage.getItem("hour2"));
$("#hour3 .description").val(localStorage.getItem("hour3"));
$("#hour4 .description").val(localStorage.getItem("hour4"));
$("#hour5 .description").val(localStorage.getItem("hour5"));
})