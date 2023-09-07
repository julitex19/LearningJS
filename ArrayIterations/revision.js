//number 1

// let arrNum = [4, 5, 3, 7, 1, 8, 0, 9,  2, 6];
// let target = 7
// // // let i = 0
// // // let arr = arrNum.length

// function findTarget(arr, target){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === target){
//             return i;
//         }
//     }
//     return -1
// }
// console.log(findTarget(arrNum, target))

// function
// function sum(a, b){
//     return a + b;
// }

// console.log(sum(4, 6))

// function subtraction(a, b){
//     return a - b;
// }
// console.log(devide(5, 2))

// function devide(a, b){
//     return a / b;
// }
// console.log(devide(10, 2))

// function multiplication(a, b){
//     return a * b;
// }
// console.log(multiplication(5, 2))

// function devide(a, b){
//     return a / b;
// }
// console.log(devide(11, 2))

//number 2

// let arrNum = [4, 5, 3, 7, 1, 8, 0, 9,  2, 6];

// const len = arrNum.length;
// for(let i = 0; i < len; i++){
//     if(arrNum[i] === target){
//         console.log(i);
//     }
// }

//number 3

// let arrNum = [4, 5, 3, 7, 1, 8, 0, 9,  2, 6];

// function findIndex(ages, juliet){
//     let i = 0;
//     while(i < ages.length){
//         if(ages[i] === juliet){
//             return i;
//         }
//         i++;
//     }
//     return 'not found';
// }

//number 4

//another method to find index of an array

// const ages = [5, 2, 7, 0];
// const juliet = 2;

// const result = ages.findIndex(function(item){
//     return item === juliet
// });

// console.log(result);

//number 5
// let arrNum = [4, 5, 3, 7, 1, 8, 0, 9,  2, 6];
// function findIndex(ages, juliet){
// for(let i = 0; i < a.length; i++){
//     if(a[i] === b){
//         return i
//     }
// }
// return 'not found';
// }

// console.log(findIndex(ages, juliet))

// You are given a word, your task is to score the word.
// The score of a word is the sum of the scores of its letters.
// The score of a letter is the position of the letter in the alphabe
// For example, the score of the word "hello" is 8 + 5 + 12 + 12 + 15
// const letter = 'abedefghijkinnopqrstuvwxyz’

// const letters = 'abcdefghijklmnopqrstuvwxyz';
// function scoreWord(word){
//     let sum = 0;
//     for(let i = 0; i < word.length; i++){
//         let indexPosition = letters.indexOf(word[i]) + 1;
//         sum += indexPosition;
//     }
//     return sum;
// }

// log(scoreWord("hello"))

// To find target using binary search, the array must be sorted.

// DECAGON.

// const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
// const target = 7;
// function binarySearch(arr, target) {
//   let start = 0;
//   let end = arr.length - 1;
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] < target) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//       return -1;
//     }
//   }
// }
// log(binarySearch(sortedArr,target))

// CHAT GPT

const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const target = 6;

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid; // Target found, return the index
    } else if (arr[mid] < target) {
      low = mid + 1; // Target is in the right half
    } else {
      high = mid - 1; // Target is in the left half
    }
  }

  return -1; // Target not found
}

log(binarySearch(sortedArr, target));

