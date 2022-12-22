// Assignment Code - Declaring the var on the global scope - the var generateBtn getting the value of #generate found in the HTML document - this id is attached to the (generate Password) button on the page
var generateBtn = document.querySelector("#generate"); 
var numOptions = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "125", "126", "127", "128" ];

var lowerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var upperOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var specialOptions = []


// Write password to the #password input
// creating a function called writePassword() that writes the password created in the text area in html
function writePassword() { // so this function is called in the event listener
  var password = generatePassword(); // assigning generatePassword() to password())   // complete the generatePassword function before moving on... 
  var passwordText = document.querySelector("#password"); // assigns passwordText the location of the text area in the HTML

  passwordText.value = password; // value is a js keyword this line can be read as put the value of the variable password in the text area in the HTML 
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // using the var generateBtn - pay attention to the item that is assigned to this var when it is (clicked (can be other things)) do writePassword()

// =============================
function userInfo () {
  userChoices.userCharLengthSelection = prompt("Choose number of characters 8-128:");

  userChoices.userNumSelection = confirm("Would you like numbers included?");
 
  userChoices.userUpperSelection = confirm("would you like upper case letters included?");
 
  userChoices.userLowerSelection = confirm("Would you like lower case letters included?");

  userChoices.userSpecialSelection = confirm("Would you like special characters included?");
  
var userChoices = { 
  userCharLengthSelection :"" , // this is going to be a number
  userNumSelection : "" ,// boolean
  userUpperSelection : "", //boolean
  userLowerSelection : "", // boolean
  userSpecialSelection : "", // boolean
} 
    return userChoices; 
}// gather the information per the read me 

function generatePassword(){
  var userAnswers = userInfo ()

  // if 
} // take gathered info (userChoices ) process it

 
 // this is going to go in the function 
// calling out a function in the function tells the code where to go next *** 
// a prompt needs to appear that asks How many characters the user wants their password to be
// function  {
  // after the user types in a number and clicks 'okay'
// that value needs to then be held
 // how to get the value of the prompt and put it here?
// if true { 
// }

// based on the values the user has selected a password needs to be generated
// once the password is generated the password needs to display in the text box provided
// my input should be validate???

// if the user clicks cancel ?? either have a random number generate and add that to the values or create an alert that states that a length needs to be selected please try again
// if user enters a value outside of perimeters create an alert that reminds them of the parameters and to try again then returning back to the prompt or returning to the main screen and the user having to start over with initial click

/*
only when a user selects ok does the value need to be stored - only when the value is true
ternaries?

next is a series of confirm() boxes asking the 4 parameters - if the user selects ok then the value needs to be stored - if the user selects cancel then the value needs to be ignored ?? - if the user selects ok the the value needs to be store as true if the user selects cancel then the value needs to be stored as false 

the values that the user enter need to be push() push(array["length"][9])?

what triggers those values to be stored? - 

so then you end up with an array that looks something like 
array {
  length : number between 8-128
  numeric : boolean
  upperCase : boolean
  lowercase : boolean
  "special characters" : boolean 
}

if - if statements - ternaries - functions that contain ether of those 

needs to then read the values and generate a 'random string'
that random string needs to the be printed in the box
*/

