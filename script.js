// Ensure HTML loads before JavaScript runs
$(document).ready(function() {
    
    // Declare/Define global variables & DOM elements
    var currentHour = parseInt(moment().hour(Number).format("HH"));
    // console.log(currentHour); // yield number of current hour
    var hoursList = document.querySelectorAll(".hour"); // used vanilla js instead of jquery because was only able to get one element with $(".hour")
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

            // Using toggle logic & conditionals (if/else) // Add/remove classes .past, .present, .future --> .classList.add/remove
            if (dataHour === currentHour) {
                hoursList[i].nextElementSibling.classList.add("present");
                hoursList[i].nextElementSibling.classList.remove("past");
                hoursList[i].nextElementSibling.classList.remove("future");
            }
            else if (dataHour < currentHour) {
                hoursList[i].nextElementSibling.classList.add("past");
                hoursList[i].nextElementSibling.classList.remove("present");
                hoursList[i].nextElementSibling.classList.remove("future");
            }
            else { // in this case, dataHour > currentHour
                hoursList[i].nextElementSibling.classList.add("future");
                hoursList[i].nextElementSibling.classList.remove("past");
                hoursList[i].nextElementSibling.classList.remove("present");
            }
        }
    
    // saveBtn will be working with local storage
    // Click event on saveBtn triggers storeTask function
    $(".saveBtn").on("click", storeTask);
        // Will use localStorage.setItem on saveBtn click event
        function storeTask() {
            alert("stored");
        }
        // Will use localStorage.getItem when page refreshed







});