// Defines my variables and links them to my html
var contactName = document.getElementById("contactName");
var contactPhone = document.getElementById("contactPhone");
var contactEmail = document.getElementById("contactEmail");
var contactBirthdate = document.getElementById("contactBirthdate");
var contactCountry = document.getElementById("contactCountry");
var contactState = document.getElementById("contactState");
var contactCity = document.getElementById("contactCity");
var contactStreet = document.getElementById("contactStreet");
var submitButton = document.getElementById("submitButton");
var contactCards = document.getElementById("contactCards");

    //Listens for the user to click on the submit button then runs its function
submitButton.addEventListener("click", function() {
    //Creates a table with the information that was enetered into the input boxes and adds it into a div in the html, also assigns the table a class to style it.
    contactCards.innerHTML += "<div class='contactCard'><center> <table> <tr> <th> " + contactName.value + "</th> <th>" + contactPhone.value + "</th> <th>" + contactEmail.value + "</th> <th>" + contactBirthdate.value + "</th> </tr> <tr> <th>" + contactCountry.value + "</th> <th>" + contactState.value + "</th> <th>" + contactCity.value + "</th> <th>" + contactStreet.value + "</th> </tr> </table><center> </div> ";
    //Clears the input boxes after the create contact button is pressed   
    contactName.value = null;
    contactPhone.value = null;
    contactEmail.value = null;
    contactBirthdate.value = null;
    contactCountry.value = null;
    contactState.value = null;
    contactCity.value = null;
    contactStreet.value = null;
});
Tr