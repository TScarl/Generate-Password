// links the button to the below addEventListener
var generateBtn = document.querySelector("#generate");

// puts the password inside the text box above the button
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to "click (the button)", triggering the writePassword function
generateBtn.addEventListener("click", writePassword);

function generatePassword(){

//Tests if the button is working properly
  console.log("Have you been playing with my button?");

  //Allows user to select from 8-128 characters
  var numChars = parseInt(prompt("How many characters do you want in your password? (8-128)"));
  while (numChars < 8 || numChars > 128 || isNaN(numChars)) {
    numChars = parseInt(prompt("How many characters do you want in your password? (8-128)"));
  } 
  
  //variables for possible character types
  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '0123456789';
  var special = '!@#$%^&*()_+-=[]{}|;:,.<>/?`~';

//prompts user to select character types to use or not use
  var selectedChars = "";
  if (confirm("Do you want lowercase letter?"))
  selectedChars += lowercase;

  if (confirm("Do you want uppercase letters?"))
  selectedChars += uppercase;

  if (confirm("Do you want numbers?"))
  selectedChars += numbers;

  if (confirm("Do you want special characters?"))
  selectedChars += special;

  if (!selectedChars.length) {
    alert("You must select atleast one character type");
  }

  //randomly selects characters from the selected types
  var randomChars = "";
  for (var i = 0; i < numChars; i++){
    var randomIndex = Math.floor(Math.random() * selectedChars.length);
    randomChars += selectedChars.charAt(randomIndex);
  }

  //returns the randomly generated password
return randomChars;
}