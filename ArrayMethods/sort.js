// sorting array using normal function
// const arr = [8, 3, 6, 0, 10, 13, 2, 12, 4, 11, 5, 1, 7, 9];
// const sortedArr = arr.sort(function(a, b){
//     return (a - b)
// })
// log(sortedArr)


// sorting array using Arrow function
// const arr = [8, 3, 6, 0, 10, 13, 2, 12, 4, 11, 5, 1, 7, 9];
// let sortedArr = arr.sort((a,b) => b - a)

// log(sortedArr)

// finding target in an array using normal function
// const arrNum = [8, 3, 6, 0, 10, 13, 2, 12, 4, 11, 5, 1, 7, 9];
// let target = 11;
// function findTarget(arr, target){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === target){
//             return i;
//         }
//     }
//     return -1
// }
// log(findTarget(arrNum, target))


// finding target in an array using arrow function

// const arrNum = [8, 3, 6, 0, 10, 13, 2, 12, 4, 11, 5, 1, 7, 9];
// let target = 25;
// const findTarget = (arr, target) =>{
//         for(let i = 0; i < arr.length; i++){
//         if(arr[i] === target){
//             return i;
//         }
//     }
//     return -1
// }

// log(findTarget(arrNum, target))


// simplest wat to solve target

// const arrNum = [8, 3, 6, 0, 10, 13, 2, 12, 4, 11, 5, 1, 7, 9];

// let target = 0;

// function findTarget(arr, target){
//     return arr.indexOf(target)
// }

// log(findTarget(arrNum, target))


// you can also solve this style using arrow function


const arrNum = [8, 3, 6, 0, 10, 13, 2, 12, 4, 11, 5, 1, 7, 9];

let target = 0;

const findTarget = (arr, target) => arr.indexOf(target)

log(findTarget(arrNum, target))

