// Assignment Code
var generateBtn = document.querySelector("#generate"); 
var numOptions = ["1234567890"]

var lengthOption = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "125", "126", "127", "128" ];

var lowerOptions = ["abcdefghijklmnopqrstuvwxyz"]

var upperOptions = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

var specialOptions = ["!#$%&()*+,-./:;<=>?@{^_`{}~"];

var userChoices = { 
  userCharLengthSelection :"" , // number
  userNumSelection : "" ,// boolean
  userUpperSelection : "", //boolean
  userLowerSelection : "", // boolean
  userSpecialSelection : "", // boolean
} 

var pass = ""
var finePass = ""


// Write password to the #password input
// creating a function called writePassword() that writes the password created in the text area in html - so write password will have to be called in the function that creates the password
function writePassword() { 
  var password = generatePassword();
  console.log(password) 
  var passwordText = document.querySelector("#password"); // assigns passwordText the location of the text area in the HTML

  passwordText.value = password; // value is a js keyword this line can be read as put the value of the variable password in the text area in the HTML 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // using the var generateBtn - pay attention to the item that is assigned to this var when it is (clicked (can be other things)) do writePassword()

function userInfo () {
  // firstPrompt();
  userChoices.userCharLengthSelection = prompt("Choose number of characters 8-128:");

  userChoices.userNumSelection = confirm("Would you like numbers included?");
 
  userChoices.userUpperSelection = confirm("would you like upper case letters included?");
 
  userChoices.userLowerSelection = confirm("Would you like lower case letters included?");

  userChoices.userSpecialSelection = confirm("Would you like special characters included?");
  

    return userChoices; 
} 

function generatePassword(){
  userInfo ();
  passFill(); 
  
  // if (userChoices.userUpperSelection){
 console.log(parseInt(userChoices.userCharLengthSelection))
  for (var i =0; i < parseInt(userChoices.userCharLengthSelection); i++) {  
  var finePass = this.pass[Math.floor(Math.random() * this.pass.length)];
 finePass = finePass + pass
  }
return finePass;
}

function passFill() {
  if (userChoices.userNumSelection && userChoices.userUpperSelection && userChoices.userLowerSelection && userChoices.userSpecialSelection ){
    pass = pass + numOptions + upperOptions + lowerOptions + specialOptions
   } 
   
  if (!userChoices.userNumSelection && userChoices.userUpperSelection && userChoices.userLowerSelection && userChoices.userSpecialSelection ){
    pass = pass + upperOptions + lowerOptions + specialOptions
  }

  if (!userChoices.userNumSelection && !userChoices.userUpperSelection && userChoices.userLowerSelection && userChoices.userSpecialSelection ){
    pass = pass + lowerOptions + specialOptions
  } 

  if (!userChoices.userNumSelection && !userChoices.userUpperSelection && !userChoices.userLowerSelection && userChoices.userSpecialSelection ){
    pass = pass + specialOptions
  } 

  if (userChoices.userNumSelection && !userChoices.userUpperSelection && !userChoices.userLowerSelection && !userChoices.userSpecialSelection ){
    pass = pass + numOptions 
   }

  if (userChoices.userNumSelection && userChoices.userUpperSelection && !userChoices.userLowerSelection && !userChoices.userSpecialSelection ){
    pass = pass + numOptions + upperOptions 
  } 

  if (userChoices.userNumSelection && userChoices.userUpperSelection && userChoices.userLowerSelection && !userChoices.userSpecialSelection ){
    pass = pass + numOptions + upperOptions + lowerOptions
 }
   
  if (userChoices.userNumSelection && !userChoices.userUpperSelection && userChoices.userLowerSelection && userChoices.userSpecialSelection ){
    pass = pass + numOptions + lowerOptions + specialOptions
  }

  if (userChoices.userNumSelection && !userChoices.userUpperSelection && !userChoices.userLowerSelection && userChoices.userSpecialSelection ){
    pass = pass + numOptions + specialOptions
  } 

  if (userChoices.userNumSelection && !userChoices.userUpperSelection && userChoices.userLowerSelection && !userChoices.userSpecialSelection ){
    pass = pass + numOptions + lowerOptions
  } 

  if (!userChoices.userNumSelection && !userChoices.userUpperSelection && userChoices.userLowerSelection && !userChoices.userSpecialSelection ){
    pass = pass + lowerOptions
  } 

  if (!userChoices.userNumSelection && userChoices.userUpperSelection && userChoices.userLowerSelection && !userChoices.userSpecialSelection ){
    pass = pass + upperOptions + lowerOptions
  }

  if (!userChoices.userNumSelection && userChoices.userUpperSelection && !userChoices.userLowerSelection && !userChoices.userSpecialSelection ){
    pass = pass + upperOptions
   } 
  
  if (!userChoices.userNumSelection && !userChoices.userUpperSelection && !userChoices.userLowerSelection && !userChoices.userSpecialSelection ){
    alert("please make a valid selection")
   }

  return pass;
  } // takes all the user input and translates it to a string that consists of all true choices
  



// function firstPrompt () {
//  var numlength = prompt("Choose number of characters 8-128:");

//   if (numlength < 128) {
//     alert("please choose a number between 8-128");
//     numlength = prompt("Choose number of characters 8-128:");
//   } 
  
//   if (numlength > 8 ){
//     alert("please choose a number between 8-128");
//     numlength = prompt("Choose number of characters 8-128:");
//   }

//   if (numlength < 128 && numlength > 8) {
//     userChoices.userCharLengthSelection = numlength.value;
//   }

//   return userChoices;
// }
// if the user clicks cancel ?? either have a random number generate and add that to the values or create an alert that states that a length needs to be selected please try again

// if user enters a value outside of perimeters create an alert that reminds them of the parameters and to try again then returning back to the prompt or returning to the main screen and the user having to start over with initial click


// based on the values the user has selected a password needs to be generated

// my input should be validate???

/*

needs to then read the values and generate a 'random string'
that random string needs to the be printed in the box
*/
