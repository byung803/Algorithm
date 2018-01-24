// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // 내가 만든 답
  // var ret="";
  // for(var i=0; i<str.length; i++)
  //     ret = ret.concat(str[str.length-1-i]);
  //
  // return ret;

  //Sol#1 reverse array
  // const arr = str.split('');
  // arr.reverse();
  //
  // return arr.join('');
  //Sol#1 CleanUp
  //return str.split('').reverse().join();

  //Sol#2
  // let reversed='';
  //
  // for (let character of str) {
  //   reversed = character + reversed;
  // }
  //
  // return reversed;

  //Sol#3
    return str.split('').reduce((reversed, character) => {
        return character+reversed;
    },'');
}

module.exports = reverse;
