// Ensure HTML loads before JavaScript runs
$(document).ready(function() {
    
    // Get date to display using .text to get API (moment) data to appear in the <p id="currentDay"> tag
        // Syntax for working with moment.js
        // moment().year(year).month(month).date(day)
            // to get current date: moment()._d;
            // to get format: m.format(dddd, MMMM Do YYYY);
        // console.log(moment()._d);
        // console.log(moment().format('dddd, MMMM Do YYYY'));
        $("#currentDay").text(moment().format('dddd, MMMM Do YYYY'));

    // Column 1 is the time (static)
    // Column 2 is form input from bootstrap, working with moment.js
    // Column 3 is the button which will be working with local storage









});