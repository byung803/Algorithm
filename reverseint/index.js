// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  //Sol#Mine
   // let buho = Math.sign(n);
   // let num = Math.abs(n);
   // // console.log("n:",n);
   // // console.log("num:", num, buho);
   // // console.log("res:",buho*parseInt(num.toString().split('').reverse().join('')));
   // return buho*parseInt(num.toString().split('').reverse().join(''));

   //Sol#1 parseInt 하면 5- 뒤에 붙은 - 라던가  0005 앞에 붙은 000은 사라진다.
   const reversed = n.toString().split('').reverse().join('');
   // console.log(parseInt(reversed));

   return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
