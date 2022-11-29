// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Assignment code here
var passwordValue = {

  pwdLength: 0,

  pwdLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  pwdUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  pwdNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

  pwdCharacter: ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
    "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var result = "";
  var passwordLength = 0;
  var upperCase;
  var lowerCase;
  var numbers;
  var specialChar;

  passwordLength = 0;
  passwordValue.pwdLength = 0;
  result = "";

  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("How many characters for your password? \nPassword must be between 8 and 128 characters");

    if (passwordLength === null) {
      return "Your password";
    }
    else {
      if (!isFinite(passwordLength)) {
        alert("You did not enter a number");
        return "Your password";
      }
      else {
        if (passwordLength < 8 || passwordLength > 128) {
          alert("Password must be between 8 and 128 characters.");
          return "Your secure password";
        }
        else {
          showPrompts();
          while (passwordValue.pwdLength < passwordLength) {

            if (lowerCase === false && upperCase === false && numbers === false && specialChar === false) {
              alert("Please select at least one criteria of lowercase, uppercase numbers or special characters")
              showPrompts();
            }
            else {

              if (lowerCase === true && passwordValue.pwdLength < passwordLength) {
                var lower = passwordValue.pwdLowerCase[Math.floor(Math.random() * 26)]
                result = result + lower;
                passwordValue.pwdLength++;
              }

              if (upperCase === true && passwordValue.pwdLength < passwordLength) {
                var upper = passwordValue.pwdUpperCase[Math.floor(Math.random() * 26)]
                result = result + upper;
                passwordValue.pwdLength++;
              }

              if (specialChar === true && passwordValue.pwdLength < passwordLength) {
                var special = passwordValue.pwdCharacter[Math.floor(Math.random() * 32)]
                result = result + special;
                passwordValue.pwdLength++;
              }

              if (numbers === true && passwordValue.pwdLength < passwordLength) {
                var num = passwordValue.pwdNumber[Math.floor(Math.random() * 10)]
                result = result + num;
                passwordValue.pwdLength++;
              }
            }
          }
        }
      }
    }

  }
  return result;


  function showPrompts() {
    lowerCase = confirm("Do you want to use lower case letters?");
    upperCase = confirm("Do you want to use upper case letters?");
    numbers = confirm("Do you want to use numbers?");
    specialChar = confirm("Do you want to use any special characters?");
  }

}

