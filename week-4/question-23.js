/*
23. Top K Frequent Elements 
Input: [1,1,1,2,2,3], k=2 → [1,2]
*/

function frequentElements(num, k) {
  let frequency = {};

  for (let i = 0; i < num.length; i++) {
    if (frequency[num[i]]) frequency[num[i]] += 1;
    else frequency[num[i]] = 1;
  }

  let frequencyArray = Object.entries(frequency);

  frequencyArray.sort((a, b) => b[1] - a[1]);

  const topK = frequencyArray.slice(0, k).map((entry) => parseInt(entry[0]));

  return topK;
}

module.exports = frequentElements;
