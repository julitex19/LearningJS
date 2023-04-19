// Given an array of objects representing cars, 
// filter the array to only include cars that have a year greater than 2010 and a price less than $20,000

const cars = [
     { make: "Toyota", model: "Camry", year: 2012, price: 15000 },
     { make: "Honda", model: "Accord", year: 2008, price: 8000 },
     { make: "Ford", model: "Focus", year: 2014, price: 12000 },
     { make: "Chevy", model: "Cruze", year: 2018, price: 18000 },
     { make: "Nissan", model: "Altima", year: 2009, price: 10000 },
   ];
   
   const filteredCars = cars.filter(car => car.year > 2010 && car.price < 20000);

   console.log(filteredCars);
   
// another method to solve it

   // const newCars = cars.filter(function(item){
   //    if(item.year > 2010 && item.price <20000){
   //         return item
   //    }
   //  })
   //  console.log(newCars)


// sorting the car year ascending to descending


   // cars.sort((car1, car2) => car1.year - car2.year);
   
   // console.log(cars);




//  sorting the car model by ascending order
   // cars.sort((car1, car2) => car1.model.localeCompare(car2.model));
   // console.log(cars);
   
   

   // 1. Sort the cars by their years from the earliest to the latest.
// 2. Sort the cars by their owners in ascending order.
// const cars =[
//    {
//      brand:"G-wagon",
//      owner:"donjazzy",
//      year:2012,
//    },
//    {
//      brand:"Audi",
//      owner:"Juliet",
//      year:2018,
//    },
//    {
//      brand:"Volkswagen",
//      owner:"Victor",
//      year:2010,
//    },
//    {
//      brand:"BMW",
//      owner:"Felix",
//      year:2020,
//    },
//  ]
 
 // cars.sort((car1, car2) => car1.year - car2.year)
 // console.log(cars)
 
 // cars.sort((car1, car2) => car1.owner.localeCompare(car2.owner));
 // console.log(cars)
 
 cars.sort((a, b) =>{
   let i = a.brand
   let j = b.brand
   if(i > j){
     return 1
   }else if(i < j){
     return -1
   }else{
     return 0
   }
 })
 
 console.log(cars)
 
 

 // Have the function FirstFactorial(num) take the num parameter 
// being passed and return the factorial of it. For example: if num = 4, 
// then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, 
// the range will be between 1 and 18 and the input will always be an integer.


function firstFactorial(num){
   let vintage = 1;
  for(let i = 1; i <= num; i++){
    // factorial = factorial * i;
    vintage *= i
  }
  return vintage;
  }
  console.log(firstFactorial(5))


  // You are counting points for a basketball game, given the amount of 2-pointers scored 
// and 3-pointers scored, find the final points for the team and return that value.




function calculateFinalScore(twoPointers, threePointers) {
   let twoPointerScore = 2 * twoPointers;
   let threePointerScore = 3 * threePointers;
   const totalScore = twoPointerScore + threePointerScore;
   return totalScore;
 }
 console.log(calculateFinalScore(4, 5))


 //Given two numbers, return true if the sum of both 
//numbers is less than 100. Otherwise return false.
function lessThan100(a, b) {
	let sum = a + b
  if(sum < 100){
    return true
  }else{
    return false
  }
}
console.log(lessThan100(60, 20))



//Create a function that takes two arguments. Both arguments are
// integers, a and b. Return true if one of them is 10 or if their sum is 10

function twoArg(a,b){
  let sum = a+b
 if(a === 10 || b === 10 || sum === 10){
  return true
 }else{
  return false
 }
}
console.log(twoArg(8,10))




//Have the function LongestWord(sen) take the sen parameter being passed and 
//return the longest word in the string. If there are two or more words that 
//are the same length, return the first word from the string with that length. 
//Ignore punctuation and assume sen will not be empty. Words may also contain numbers,
// for example "Hello world123 567"