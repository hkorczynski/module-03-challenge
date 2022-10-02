// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function randInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }

  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}


function getRandomItem(list) {
  return list[randInt(0, list.length)]
}


// Password length 
function generatePassword() {
  console.log("button click");
  var passwordLength = window.prompt("How many characters in your password?");

  if (passwordLength >= 1 && passwordLength <= 128) {
    window.alert("dope");
  } else {
    window.alert("Please enter a number between 1 and 128.");
  }

  // Confirmation prompts
  var passwordLowercase = window.confirm("Would you like to include lowercase?");
  var passwordUppercase = window.confirm("Would you like to include uppercase?");
  var passwordNumbers = window.confirm("Would you like to include numbers?");
  var passwordSpecialChar = window.confirm("Would you like to include special characters?");

  // Character arrays 
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  
  var passwordSelections = []

  // Character logic 
  if (passwordLowercase === true) {
    passwordSelections.push(lowerCase)
  }

  if (passwordUppercase === true) {
    passwordSelections.push(upperCase)
  }

  if (passwordNumbers === true) {
    passwordSelections.push(numbers)
  }

  if (passwordSpecialChar === true) {
    passwordSelections.push(symbols)
  }
  

  // Generated password logic and variables 
  var generatedPassword = ""
  
  for (var i = 0; i < passwordLength; i++) {
    var randomItem = getRandomItem(passwordSelections);
    var randomChar = getRandomItem(randomItem);
    generatedPassword += randomChar;
    //console.log("hello world");
    //generatedPassword += passwordSelections.length(Math.floor(Math.random() * passwordLength[i]));
  }
  console.log(generatedPassword);
  
  
  return generatedPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// if ()
