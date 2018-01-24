// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

  // mySol
    let cap=[];
    str.split(" ").map((char) => {
      cap.push(char[0].toUpperCase() + char.slice(1));
    });
    return cap.join(' ');
}

module.exports = capitalize;

// mySol
  // let cap="";
  // str.split(" ").map((char) => {
  //   let temp;
  //   temp = char.slice(0,1).toUpperCase() + char.slice(1,char.length);
  //   if(cap !== "") {
  //     cap = cap +' '+ temp;
  //   } else {
  //     cap = temp;
  //   }
  // });
  // return cap;

// mySol Repair

  // sol#1
  //    const words = [];
  //
  //    for(let word of str.split(' ')) {
  //      words.push(word[0].toUpperCase() + word.slice(1));
  //    }
  //
  //    return words.join(' ');
  //
  // }

// sol#2
  // let result = str[0].toUpperCase();
  //
  // for(let i=1; i<str.length; i++) {
  //   if(str[i-1] === " ") {
  //     result += str[i].toUpperCase();
  //   } else {
  //     result += str[i];
  //   }
  // }
  //
  // return result;
