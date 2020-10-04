// Ensure HTML loads before JavaScript runs
$(document).ready(function() {
    
    // Declare global variables
    
    
    // Get date to display using .text to get API (moment) data to appear in the <p id="currentDay"> tag
        // Syntax for working with moment.js
        // moment().year(year).month(month).date(day)
            // to get current date: moment()._d;
            // to get format: m.format(dddd, MMMM Do YYYY);
        // console.log(moment()._d);
        // console.log(moment().format('dddd, MMMM Do YYYY'));
        $("#currentDay").text(moment().format('dddd, MMMM Do YYYY'));

    // Textarea input works with .past, .present, .future classes, and will be working with moment.js

    
    // saveBtn will be working with local storage









});