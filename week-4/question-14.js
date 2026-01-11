/*
14. All Permutations of a String 
Description: Generate all permutations. 
Input: "abc" → abc, acb, bac, ... 
*/

function permutations(str) {
  if (str.length === 1) return [str];

  let result = [];

  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    const remaining = str.slice(0, i) + str.slice(i + 1);

    const perms = permutations(remaining);
    for (let perm of perms) {
      result.push(current + perm);
    }
  }

  return result;
}
module.exports = permutations;
