//Need password to be generated 

//when button is clicked, prompt pops up asking user to input the desired length of their password, between 8-128.
    //once length is chosen
    //confirm boolean pop ups that gives user the ability to choose if they want numbers, this is done using a randomizer
        //Need to add something that converts strings to number type    
    //confirm boolean pop ups that gives user the ability to choose if they want uppercase letters, this is done using a randomizer
    //confirm boolean pop ups that gives user the ability to choose if they want lowercase letters, this is done using a randomizer
    //confirm boolean pop ups that gives user the ability to choose if they want special characters, this is done using a randomizer



    // You will need user to choose character types - what type of built in prompt returns a boolean value?
      // Variable to store all character types chosen
      // logic to verify at least one character type is chosen
      // Use logic to assign character types based on boolean value returned
  // Math.random will need to be used -- research Math object and how to have random return an integer (hint: needed for index). (hint: .length method to be used to determine number of random choices)

  // You will need a password length from prompt at least 8, and not more than 128 characters - how to turn a string type number into a number type?
      // Variable to store password length
      // Validation that correct number is chosen - user should not be allowed to choose 7 characters


//STEPS TAKEN:
    //1.DECLARE VARIABLES FOR ALL CHARACTERS SEPARATELY

    //2.LOOK FOR PREPOPULATED CODE THAT NEEDS TO BE MOVED TO EXECUTE, IN THIS CASE, generateBtn.addEventListener("click", writePassword); WAS PREPOPULATED AT THE BOTTOM OF THE PAGE. JAVASCRIPT READS CODE FROM TOP TO BOTTOM SO I MOVED THE CODE UP BEFORE THE FIRST FUNCTION, BECAUSE IT IS SPECIFICALLY TARGETING THE BUTTON WE NEED THE USER TO PRESS. IT WOULDN'T MAKE SENSE FOR THE CODE TO BE AT THE BOTTOM IF IT IS THE FIRST THING THAT NEEDS TO BE EXECUTED AS SOON AS THE WEBPAGE IS OPENED.
    
    //3.LOOK AT PREPOPULAED CODE AGAIN, FOR ANY FUNCTIONS THAT NEED TO BE CREATED, AKA, INSIDE THE writePassword FUNCTION, THERE IS A DECLARED VARAIBLE var password = generatePassword(); WHICH TELLS ME THAT A FUNCTION FOR generatePassword NEEDS TO BE CREATED.
   
    //3.CREATE generatePassword FUNCTION
    
    //4.THE generatePassword FUNCTION NEEDS TO BE BASED ON THE PROMPTS THAT THE USER SELECTS, DUE TO THAT, I CREATE A WHOLE FUNCTION TO HOLD ALL PROMPTS BECAUSE THERE IS SO MANY

    //5.CREATE getPrompts FUNCTION

    //6.BEGIN ADDING PROMPTS IN THE STEPS THEY NEED TO APPEAR, AKA THE FIRST WOULD BE TAKING THE CHARACTER LENGTH WE DECLARED GLOBALLY AND ASKING USER TO INPUT WHAT SIZE THEY WANT THEIR PASSWORD TO BE characterLength = parseInt(prompt("Choose a password length (8 - 128 characters)")); I USED parseInt BEFORE THE PROMPT TO CONVERT ANY STRING THE USER INPUTS TO AN INTEGER AKA IF THEY ENTER "twenty" parseInt WILL AUTOMATICALLY CONVERT THAT TO 20.

    //7.CREATE AN IF STATEMENT BEGINNING WITH NaN SO IF USER INPUTS SOMETHING THAT IS NOT A NUMBER