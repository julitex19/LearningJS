const arr = ['j', 'e'];

let sum = 0;

function sumLetters(arr){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u'){
      sum += 1
    } else {
      sum += 6
    }
  }
}

sumLetters(arr)

console.log(sum);








// test no 2

// const str = 'fuck';

// function testDecagon(str){
//      let newStr = '';
//      for(let item of str){
//           if(item !== 'u' && item !== 'c'){
//                newStr += item
//           } else {
//                newStr += '*'
//           }
//      }
//      console.log(newStr)
// }
// testDecagon(str)


// // const str = 'fuck';

// function testDecagon(str){
//      let newStr = '';
//      for(let item of str){
//           if(item !== 'u' && item !== 'c'){
//                newStr += item
//           } else {
//                newStr += '*'
//           }
//      }
//      return newStr
// }
// console.log(testDecagon(str))






//const accountNo = '6231268070'

// function hideDigit(accountNo){
//      let newStr = '';
//      console.log(accountNo.slice(0,3))
// }

// hideDigit(accountNo)


const array = ["nneamaka"];
const str = array[0];

if (str.length >= 2) {
  const lastIndex = str.length - 1;
  const secondLastIndex = str.length - 3;
  const newStr = str.substring(0, secondLastIndex) + "**";
  console.log(newStr); // output: "nneama**"
} else {
  console.log(str); // output: "nneamaka" (no change)
}
