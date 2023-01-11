// Declare a variable "m" which is assigned the value of the current moment in time using the moment.js library.
var m = moment();

// Update the text of the element with an id of "currentDay" to the current day and time, formatted as a full date and time.

$("#currentDay").text(moment().format('LLLL'));

// When the document is ready, run the colorChange and renderText functions.

$(document).ready( function() {
    colorChange ();
    renderText();
});

// Declare a variable "currentTime" which is assigned the current hour in the day using the moment.js library.

function colorChange () {
    
// Log the current time to the console with a string message "Current Time"

    var currentTime = moment().hours();
    console.log("Current Time" + currentTime);
       
// The colorChange function iterates over elements with class "input" and based on the comparison
// between current time and the schedule time, assigns the class 'past', 'present' or 'future' to the elements
$(".input").each(function () {
    var currentElement = $(this);
    var scheduledTime = parseInt(currentElement.attr("id"));
    console.log(scheduledTime);

    if (currentTime > scheduledTime) {
        currentElement.removeClass("future");
        currentElement.removeClass("present");
        currentElement.addClass("past");
    } else if (currentTime < scheduledTime) {
        currentElement.removeClass("present");
        currentElement.removeClass("past");
        currentElement.addClass("future");
    } else {
        currentElement.removeClass("future");
        currentElement.removeClass("past");
        currentElement.addClass("present");
    }
});
}
// Button functionality, variables for on save button click, .val() is where the text goes
var eventText;
var eventTime;

$(".saveBtn").click(function() {
    eventText = $(this).siblings(".input").val();
    console.log(eventText);
    eventTime = $(this).siblings(".hour").text();
    console.log(eventTime);
    localStorage.setItem(eventTime, JSON.stringify(eventText));

    colorChange ();
    renderText ();
    
});

function renderText () {   

    var saveEventText9 = JSON.parse(localStorage.getItem("09:00 am"));
    $("#9").val("");
    $("#9").val(saveEventText9);
    
    var saveEventText10 = JSON.parse(localStorage.getItem("10:00 am"));
    $("#10").val("");
    $("#10").val(saveEventText10);
    
    var saveEventText11 = JSON.parse(localStorage.getItem("11:00 am"));
    $("#11").val("");
    $("#11").val(saveEventText11);
    
    var saveEventText12 = JSON.parse(localStorage.getItem("12:00 pm"));
    $("#12").val("");
    $("#12").val(saveEventText12);
    
    var saveEventText1 = JSON.parse(localStorage.getItem("01:00 pm"));
    $("#13").val("");
    $("#13").val(saveEventText1);

    var saveEventText2 = JSON.parse(localStorage.getItem("02:00 pm"));
    $("#14").val("");
    $("#14").val(saveEventText2);

    var saveEventText3 = JSON.parse(localStorage.getItem("03:00 pm"));
    $("#15").val("");
    $("#15").val(saveEventText3);

    var saveEventText4 = JSON.parse(localStorage.getItem("04:00 pm"));
    $("#16").val("");
    $("#16").val(saveEventText4);

    var saveEventText5 = JSON.parse(localStorage.getItem("05:00 pm"));
    $("#17").val("");
    $("#17").val(saveEventText5);
};