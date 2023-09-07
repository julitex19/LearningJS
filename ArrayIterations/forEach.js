

// forEach method loops through an array and get each item in the array;
// it takes a callback function;
const number = [3, 8, 1, 2, 5, 9];

const arr = []
number.forEach(function(item){
    arr.push(item * 2)
    console.log(item)
})

console.log(arr)



// const ages = [5, 6, 2, 7, 0];
// const juliet = 4;
// function findIndex(ages, juliet){
//     for (let i = 0; i < ages.length; i++){
//         if(ages[i] === juliet){
//             return i;
//         }

//     }
//     return '"not found"'
// }

// console.log(findIndex(ages, juliet));