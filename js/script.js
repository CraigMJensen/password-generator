
// Arrays for the password
var alphaUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var alphaLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '<', '>', ',', '.'];

var confirmLength = '';
var confirmUpperCase;
var confirmLowerCase;
var confirmNumericCharacter;
var confirmSpecialCharacter;

var generateBtn = document.querySelector("#generate");

function generatePassword() {

    var confirmLength = (prompt('How many characters would you like your password?  Choose between 8 and 128.'));

    while (confirmLength <= 7 || confirmLength >= 129) {
        alert('Password length must be between 8 and 128 characters long.  Please try again.');
        var confirmLength = (prompt('How many characters would you like you password?  Choose between 8 and 128.'));

    }
    alert('Your password will contain ' + confirmLength + ' characters');

    var confirmUpperCase = confirm('Click OK for your password to contain UPPERCASE letters.');
    var confirmLowerCase = confirm('Click OK for your password to contain LOWERCASE letters.')
    var confirmNumericCharacter = confirm('Click OK for your password to contain NUMBERS.');
    var confirmSpecialCharacter = confirm('Click OK for your password to contain SPECIAL characters.');

    while (confirmUpperCase === false && confirmLowerCase === false && confirmNumericCharacter === false && confirmSpecialCharacter === false) {
        alert('You must choose at lease one parameter');
        var confirmUpperCase = confirm('Click OK for your password to contain UPPERCASE letters.');
        var confirmLowerCase = confirm('Click OK for your password to contain LOWERCASE letters.')
        var confirmNumericCharacter = confirm('Click OK for your password to contain NUMBERS.');
        var confirmSpecialCharacter = confirm('Click OK for your password to contain SPECIAL characters.');
    }

    var pwChars = []

    if (confirmUpperCase) {
        pwChars = pwChars.concat(alphaUpper);
    }
    if (confirmLowerCase) {
        pwChars = pwChars.concat(alphaLower);
    }
    if (confirmNumericCharacter) {
        pwChars = pwChars.concat(numbers);
    }
    if (confirmSpecialCharacter) {
        pwChars = pwChars.concat(specialChars);
    }

    var randomPassword = ''

    for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + pwChars[Math.floor(Math.random() * pwChars.length)];
    }
    return randomPassword;

}

// console.log();

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);