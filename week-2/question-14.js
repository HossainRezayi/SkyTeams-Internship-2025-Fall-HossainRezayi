/*
14. Check character type 
Description: Input a character and determine if it’s a vowel, consonant, digit, or special symbol. 
Example: 
Input: 
a 
Output: 
Vow
*/

function CheckCharacter(char) {
  var format = `/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/`;
  var consonant = "BCDFGHJKLMNPQRSTVWXYZ";
  var vowel = "AEIOU";
  var digit = "0123456789";

  var type;

  for (let index = 0; index < format.length; index++) {
    if (char === format[index]) {
      type = "Special Symbol";
      break;
    }

    if (index <= consonant.length) {
      if (char.toUpperCase() === consonant[index]) {
        type = "Consonant";
        break;
      }
    }

    if (index <= vowel.length) {
      if (char.toUpperCase() === vowel[index]) {
        type = "Vowel";
        break;
      }
    }

    if (index <= digit.length) {
      if (char === digit[index]) {
        type = "Digit";
        break;
      }
    }
  }

  return type;
}

module.exports = CheckCharacter;
