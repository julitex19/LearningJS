const cars = ['venza', 'camry', 'lambo', 'lexus', 'ford', 'matrix'];
// const ans = [];
// cars.forEach(function(item){
//      ans.push(item.toUpperCase())
//      console.log(item)
// })
// console.log(ans)
let result = [];
function brandOfCars(cars){
     for(let i = 0; i < cars.length; i++){
cars[i] = (cars[i]).toUpperCase();

     }
     return cars;
}
console.log(brandOfCars(cars))




// Write a function that takes in an array of numbers
//  and returns the sum of all the even numbers in the array.

// const arr = [12, 4, 6, 9, ]
// function sumOfEvenNumbers(arr){
//      let sum = 0;
//      for(let i = 0; i < arr.length; i++){
//           if(arr[i] % 2 === 0){
//                sum += arr[i];
//           }
//           return sum
//      }
// }
//    console.log(sumOfEvenNumbers(arr))
  

// Write a function that takes in an array of strings and 
// returns the string with the longest length.



// const arr = ['juliet', "nneamaka", 'victor', 'prince', 'vitalis']
// function longestString(arr) {
//      let longest = "";
//      for (let i = 0; i < arr.length; i++) {
//        if (arr[i].length > longest.length) {
//          longest = arr[i];
//        }
//      }
//      return longest;
//    }
//    console.log(longestString(arr))

   // OBI JULIET
   