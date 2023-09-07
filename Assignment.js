

// The formula to convert from Celsius to Fahrenheit is the
// temperature in Celsius times 9/5, plus 32.
// You are given a variable celsius representing a temperature in Celsius.
// Define a variable fahrenheit and assign it the Fahrenheit temperature
// equivalent to the given Celsius temperature.
// Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
// NOTE; Return the value of the result from the function

// SOLUTION

// function convertCelsiusToFahrenheit(celsius) {
//         let fahrenheit = (celsius * 9/5) + 32;
//         return fahrenheit;
//    }
//     console.log(convertCelsiusToFahrenheit(8));




//     Given an integer array nums, move all the even integers
//     at the beginning of the array  followed by all the odd integers.
//     Return any array that satisfies the condition
//     Example:
//     Input: nums = [3,1,2,4]
//     output: [2,4,3,1]
//     Explanation: outputs: [4,2,3,1], [2,4,1,3] and [4,2,1,3]
//     would also be accepted

// SOLUTION
// const nums = [3, 1, 2, 4, 9, 11];
// function arangedEveOdd(nums) {
//     let left = 0;
//     let right = nums.length - 1;
  
//     while (left < right) {
//       if (nums[left] % 2 !== 0 && nums[right] % 2 === 0) {
//         [nums[left], nums[right]] = [nums[right], nums[left]];
//       }
  
//       if (nums[left] % 2 === 0) {
//         left++;
//       }
  
//       if (nums[right] % 2 !== 0) {
//         right--;
//       }
//     }
  
//     return nums;
//   }
  
 
//   log(arangedEveOdd(nums));


// Write a function that takes in integers in minute and convert it to seconds
//         Examples:
//         convert(5) => 300
//         convert(3) => 180

// SOLIUTION
// function intConvert(minutes){
//     return minutes * 60;
// }

// log(intConvert(5))

// function intConvert(minutes) {
//   let seconds = minutes * 60;
//   return seconds;
// }
// log(intConvert(3))



// Write a function that returns true if a number passed into it is an 
// even number and false if otherwise.

// SOLUTION

// function truFalse(num){
//     if(num % 2 == 0){
//         return true
//     }
//     return false
// }

// log(truFalse())


// Create a function that takes a number as an argument, increments the number by 
// 1 and return the result. Example addition(0) => 1, addition(4) => 5

// SOLUTION (longer approach)

// function addInt(num) {
//     let result = num;
//     for (let i = 0; i < 1; i++) {
//       result += 1;
//     }
    
//     return result;
//   }

//   log(addInt(20))
  
//shoter approach

// function addInt(num){
//     return num + 1
// }

// log(addInt(20))




// Truncate a string (first argument) if it is longer than 
// the given maximum string length (second argument). Return 
// the truncated string with a ... ending.

function truncString(str, lengthStr){
    if(str <= lengthStr){
        return str;
    }else{
        return str.slice(0, lengthStr) + "...;"
    }
}


log(truncString("juliet is a good person", 10))




// function reverseString(str) {
//     let  reversedString = "";
//     for (let i = str.length - 1; i >= 0; i--) {   // looping through the back.
//         reversedString += str[i];
//     }
//     return reversedString;
//   }
//   log(reverseString("hello"));

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
// log(reverseString("hello"))
