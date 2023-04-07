// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Prompt the user for password criteria
  var passwordLength = parseInt(prompt("How many characters would you like your password to be? (Choose between 8 and 128)"));

  // Check if the password length is within the allowed range
  if (passwordLength < 8 || passwordLength > 30 || isNaN(passwordLength)) {
    alert("Please enter a valid number between 8 and 30.");
    return "";
  }

  var includeLowercase = confirm("Would you like to include lowercase letters?");
  var includeUppercase = confirm("Would you like to include uppercase letters?");
  var includeNumbers = confirm("Would you like to include numbers?");
  var includeSymbols = confirm("Would you like to include symbols?");

  // Check if at least one type of character is selected
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols) {
    alert("Please select at least one type of character.");
    return "";
  }

  // Define character sets based on selected criteria
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChars = "0123456789";
  var symbolChars = "!@#$%^&*()_";

  var availableChars = "";
  if (includeLowercase) {
    availableChars += lowercaseChars;
  }
  if (includeUppercase) {
    availableChars += uppercaseChars;
  }
  if (includeNumbers) {
    availableChars += numberChars;
  }
  if (includeSymbols) {
    availableChars += symbolChars;
  }

  // Generate the password using the selected characters
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars[randomIndex];
  }

  return password;
  }

