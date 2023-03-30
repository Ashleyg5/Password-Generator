// Write password to the #password input

 
 //prepopulated
//created variable arrays (using const because these variables are set and will not be changed) for charcter length, userChoice, special characters, lowercase characters, uppercase characters, and numbers
var characterLength = 8;
var userChoice = ""; //userChoice holds all character types selected by the user
var specialChar = [`!`,`"`,`#`,`$`,`%`,`&`,`'`,`()`,`*`,`+`,`,`,`-`,`.`,`/`,`:`,`;`,`<`,`=`,`>`,`?`,`@`,`[`,`^`,`_`,`}`,`{`,`|`,`~`];
var lowerCaseChar = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`];
var upperCaseChar = [`A`,`B`,`C`,`D`,`E`,`F`,`G`,`H`,`I`,`J`,`K`,`L`,`M`,`N`,`O`,`P`,`Q`,`R`,`S`,`T`,`U`,`V`,`W`,`X`,`Y`,`Z`];
var number = [`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`0`];
  
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //prepopulated, moved up from the bottom to execute before all functions


 
function writePassword() { //prepopulated
    var rightPrompts = getPrompts();  //returns true or false
    var passwordText = document.querySelector("#password");

  if (rightPrompts) {//check if user gave right prompts. If they did, we can begin generating the password
    var finalPassword = generatePassword();
    passwordText.value = finalPassword;
   } else {//else statement in case user doesn't input the right prompts
    passwordText.value = "";
   }
  
}

function generatePassword() { //created generatepassword function, I knew this was to be created because the prepopulated writepassword function contained a var password = generatepassword();
  var password = "";//declare password with an empty string inside

  for(var i = 0; i < characterLength; i++) {//create a for loop where index = 0 and if index is less than character length the index will add 1
    var random = Math.floor(Math.random() * userChoice.length);//declared random as a var and used the math expression to generate a random set according to the userChoice
    password = password + userChoice[random];//set password to equal password and added userChoice as random
  }
  return password; //whatever the final content is after this for loop, it will return to the variable password in the writePassword function, line 24
}

function getPrompts(){ //created getprompts function to hold all prompts inside, all other functions will loop to this function to execute prompts
  userChoice = "";//set this as empty so it can restart fresh 
  characterLength = parseInt(prompt("Choose a password length (8 - 128 characters)")); //because characterlength was already declared a variable globally, I dont need to put the const in front of character length // parseInt was used at the beginning to convert strings to intergers ex. if user types "twenty" parseInt will automatically convert the "twenty" to 20.

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) { //is Not a Number, this will return true or false. After that I insert the or symbol with characterlength being no shorter than 8 and the or symbol again with the character length being no larger than 128.
    alert("UH OH! Must be a number between 8 - 128. Please try again.");//added an alert in case user enters a number less than 8 or greater than 128, they will recieve an error message which then returns them back to the beginning of this function
    return false;
  }

  if (confirm("Would you like lowercase letters in your password?")) {//this if statement contains a confirm which asks the user whether they want lowercase or uppercase letters, special characters, or numbers. The confirm is a boolean which will return as either true or false
    userChoice = userChoice.concat(lowerCaseChar);
  }

  if (confirm("Would you like uppercase letters in your password?")) {
    userChoice = userChoice.concat(upperCaseChar);
  }

  if (confirm("Would you like numbers in your password?")) {
    userChoice = userChoice.concat(number);
  }

  if (confirm("Would you like special characters in your password?")) {
    userChoice = userChoice.concat(specialChar);
  }
  return true;
}


