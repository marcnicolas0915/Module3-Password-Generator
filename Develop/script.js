// Assignment code here
var passwordValue = {
  pwdLength: 0,

  pwdLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  pwdUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  pwdNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

  pwdCharacter: ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
    "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]

}

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
  var result = " ";
  var passwordLength = 0;
  var upperCase = 0;
  var lowerCase = 0;
  var numbers;
  var specialChar;

  passwordLength = 0
  passwordValue.pwdLength = 0;
  result = " ";

  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("How many characters for your password? \nPassword must be between 8 and 128 characters")

    if (passwordLength === null) {
      return ("Your password");
    }
    else {
      if (isFinite(passwordLength)) {
        alert("Please enter a number");
        return "Your password";

      }
      else {
        if (passwordLength < 8 || passwordLength > 128) {
          alert("Password must be between 8 and 128 characters");
          return "Your password"
        }
        else {
          showPrompts();
          while (passwordValue.pwdLength < passwordLength) {
            if (pwdLowerCase === false && pwdUpperCase === false && pwdCharacter === false) {
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
                passwordValue.pwdUpperCase++;
              }
              if (specialChar === true && passwordValue.pwdLength < passwordLength) {
                var sc = passwordValue.pwdCharacter[Math.floor(Math.random() * 32)]
                result = result + sc;
                passwordValue.pwdCharacter++;
              }
              if (numbers === true && passwordValue.passwordLength < passwordLength) {
                var numbers = passwordValue.pwdNumber[Math.floor(Math.random() * 10)]
                result = result + numbers
                passwordValue.pwdNumber++;
              }
            }
          }
        }
      }
    }

  }
}
