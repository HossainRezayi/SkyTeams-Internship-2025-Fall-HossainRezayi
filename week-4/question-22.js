/*
22. Merge Overlapping Intervals 
Input: [[1,3],[2,6],[8,10]] → [[1,6],[8,10]] 
*/

function mergeIntervals(intervals) {
  let merge = [intervals[0]];

  for (let j = 1; j < intervals.length; j++) {
    let prev = merge[merge.length - 1];
    let curr = intervals[j];
    if (curr[0] <= prev[1]) prev[1] = prev[1] > curr[1] ? prev[1] : curr[1];
    else {
      merge.push(curr);
    }
  }

  return merge;
}

module.exports = mergeIntervals;
