// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  //Sol#Mine
  // let reversed="";
  // for(let char of str) {
  //   reversed = char + reversed;
  // }
  //
  // if(reversed === str){
  //   return true;
  // }else {
  //   return false;
  // }

  //Sol#1
  // const reversed = str.split('').reverse().join('');
  //
  // return str === reversed;

  //Sol#2 use array.every(), i는 현재 index 번호
    return str.split('').every((char, i) => {
      return char === str[str.length-i-1];
    })

}

module.exports = palindrome;
