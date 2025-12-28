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
  var special = `/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/`;
  var consonant = "BCDFGHJKLMNPQRSTVWXYZ";
  var vowel = "AEIOU";
  var digit = "0123456789";

  var result = "";
  if (IndividualChecker(special)) result = "Special Symbol";
  if (IndividualChecker(consonant)) result = "Consonant";
  if (IndividualChecker(vowel)) result = "Vowel";
  if (IndividualChecker(digit)) result = "Digit";

  function IndividualChecker(type) {
    for (let index = 0; index < type.length; index++) {
      if (char.toUpperCase() === type[index]) return true;
    }
  }

  return result;
}

module.exports = CheckCharacter;
