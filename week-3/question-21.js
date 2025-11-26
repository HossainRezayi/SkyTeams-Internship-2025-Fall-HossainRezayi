/*
21. Password Strength Checker 
Description: A strong password must: 
• Be at least 8 characters long. 
• Contain at least one uppercase letter, one lowercase letter, and one number. 
Example: 
Input: 
MyPass123 
Output: 
Strong 
Input: 
pass 
Output: 
Weak 
*/

function isCharContain(pass, type) {
  var checker = false;
  for (let i = 0; i < pass.length; i++) {
    for (let j = 0; j < type.length; j++) {
      if (pass[i] === type[j]) checker = true;
    }
  }
  return checker;
}

function isStrongPassword(pass) {
  let uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
  let lowercase = "qwertyuiopasdfghjklzxcvbnm";
  let number = "1234567890";
  let checker = false;

  if (pass.length >= 8) {
    checker =
      isCharContain(pass, uppercase) &&
      isCharContain(pass, lowercase) &&
      isCharContain(pass, number);
  }

  return checker;
}

module.exports = isStrongPassword;
