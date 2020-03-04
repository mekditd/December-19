$(document).ready(function () {

    //First, we display current day, date, and time in the jumbotron.
    var currentDayEl = $("#currentDay");

    currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    var inputBlockEl = $(".time-block");
    var saveBtns = $(".saveBtn");

    var update = function () {
        currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));

        var now = moment().hour(); //returns 0 through 23, aka military time.
        //if inputblockEl is < now; then change class to past.            
        //if inputblockEl == now; then change class to present.
        //if inputblockEl > now, then change class to future !!! This is NOT needed because no past will become future for the day. Also, all blocks are set as future as default.

        //Then, we calculate the time of day with moment, and then change the classes of the rows accordingly.

        inputBlockEl.each(function (i, element) {
            element = $(element);
            if (now > element.attr("data-hour")) {
                element.addClass("past").removeClass("future present");
            } else if (now == element.attr("data-hour")) {
                element.addClass("present").removeClass("future past");
            }
        });
    }
    // we're just gonna check every SECOND.
    setInterval(update, 1000);
    $('.toast').toast(500);
    //When the user clicks on the save icon, it should save their string to local storage.

    saveBtns.on("click", function (event) {
        //save userInput as a string to local storage. with THIS button!
        $(".toast").toast('show');

        var button = $(this);

        var btnData = $(this).attr("data-time");
        //console log click on THIS specific button in this class
        console.log(btnData);
        //descriptionTarget locates the specific description element that user filled in text with.
        var descriptionTarget = $("#description" + btnData);
        console.log(descriptionTarget);
        //we log to ensure we're grabbing the user input.
        console.log(descriptionTarget.val());

        //this is supposed to set the text area text to that specific textArea and store it.
        //We pick the "id" attribute from the element, descriptionTarget. This id is the key, and the key value is descriptionTarget.val().
        localStorage.setItem(descriptionTarget.attr("id"), descriptionTarget.val());
    });

    //site should load any saved data from localStorage.
    $("#description9").text(localStorage.getItem("description9"));
    $("#description10").text(localStorage.getItem("description10"));
    $("#description11").text(localStorage.getItem("description11"));
    $("#description12").text(localStorage.getItem("description12"));
    $("#description13").text(localStorage.getItem("description13"));
    $("#description14").text(localStorage.getItem("description14"));
    $("#description15").text(localStorage.getItem("description15"));
    $("#description16").text(localStorage.getItem("description16"));
    $("#description17").text(localStorage.getItem("description17"));

    //clear button clears local storage.
    $("#clearBtn").on("click", function () {
        localStorage.clear();
        $(".description").text("");
    });

});