// Assignment Code
var generateBtn = document.querySelector("#generate"); 
var numOptions = ["1234567890"]

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

  firstPrompt();

  userChoices.userNumSelection = confirm("Click ok if you would like numbers included.");
 
  userChoices.userUpperSelection = confirm("Click ok if you would like upper case letters included.");
 
  userChoices.userLowerSelection = confirm("Click ok if you would like lower case letters included.");

  userChoices.userSpecialSelection = confirm("Click ok if you would like special characters included.");
  

    return userChoices; 
} 

function generatePassword(){
  userInfo ();
  passFill(); 
   
  for (var i = 0; i < parseInt(userChoices.userCharLengthSelection); i++) {  
  var ranPass = this.pass[Math.floor(Math.random() * this.pass.length)];
 finePass = finePass + ranPass
  }
return finePass; // all had to come together before sending up
}

function firstPrompt(){
  userChoices.userCharLengthSelection = prompt("Choose number of characters 8-128:");

  while (parseInt(userChoices.userCharLengthSelection) < 8 || parseInt(userChoices.userCharLengthSelection) > 128) {
    userChoices.userCharLengthSelection = prompt("Choose number of characters 8-128:");

    if (parseInt(userChoices.userCharLengthSelection) < 8 || parseInt(userChoices.userCharLengthSelection) > 128){
      alert("please try again")
      
    }
  }
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
  

