// Ensure HTML loads before JavaScript runs
$(document).ready(function() {
    
    // Declare/Define global variables & DOM elements
    var currentHour = parseInt(moment().hour(Number).format("HH"));
    // console.log(currentHour); // yield number of current hour
    var hoursList = document.querySelectorAll(".hour"); // array of hour divs
    var dataHour;
    
    // Get date to display using .text to get API (moment) data to appear in the <p id="currentDay"> tag
        // Syntax for working with moment.js
        // moment().year(year).month(month).date(day)
            // to get current date: moment()._d;
            // to get format: m.format(dddd, MMMM Do YYYY);
        // console.log(moment()._d); // yields object of current day
        // console.log(moment().format('dddd, MMMM Do YYYY')); // yields string
        $("#currentDay").text(moment().format('dddd, MMMM Do YYYY'));

    // Textarea input works with .past, .present, .future classes, and will be working with moment.js
        // Retreive data-hr value from hour divs
        for (var i=0; i<hoursList.length; i++) {
            dataHour = parseInt(hoursList[i].getAttribute("data-hr"));
            // console.log(dataHour);
        }
        // Using toggle logic & conditionals (if/else)
            // Add/remove classes .past, .present, .future --> .classList.add/remove
            // Based on the current hour --> moment().hour(Number);
                // Format - moment(currentHour).format("hh a");
                // Use moment().isBefore("09 AM", "hour"); - isAfter, isSame
    
    // saveBtn will be working with local storage
        // Will use localStorage.setItem on saveBtn click event
        // Will use localStorage.getItem when page refreshed







});