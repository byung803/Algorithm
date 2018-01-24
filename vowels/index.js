// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  console.log(matches);
  return matches ? matches.length : 0;
}

module.exports = vowels;

//mySol
// let vowels = 0;
// str.split('').map((char1) => {
//   let char = char1.toLowerCase();
//   if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')
//     vowels++;
// })
//
// return vowels;

// let vowels = 0;
// for(let char1 of str) {
//   let char = char1.toLowerCase();
//   if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')
//     vowels++;
// }
// return vowels;

//sol#1
// let count = 0;
// const checker = ['a','e','i','o','u'];
//
// for (let char of str.toLowerCase()) {
//   if (checker.includes(char)) {
//     count++;
//   }
// }
//
// return count;
