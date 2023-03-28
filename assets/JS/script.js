// Write the generatePassword() function
    // You will need a password length from prompt at least 8, and not more than 128 characters - how to turn a string type number into a number type?
      // Variable to store password length
      // Validation that correct number is chosen - user should not be allowed to choose 7 characters
    // You will need user to choose character types - what type of built in prompt returns a boolean value?
      // Variable to store all character types chosen
      // logic to verify at least one character type is chosen
      // Use logic to assign character types based on boolean value returned
  // Math.random will need to be used -- research Math object and how to have random return an integer (hint: needed for index). (hint: .length method to be used to determine number of random choices)


  // Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
