
// const country = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];

// function upperCase(country){
//      for(let i = 0; i < country.length; i++){
//           country[i] = country[i].toUpperCase();
//      }
//      return country;
// }

// console.log(upperCase(country));



// function fullName(firstName, lastName) {
//   return `${firstName} ${lastName}`;
// }

// Example usage
// console.log(fullName('Juliet', 'Obi')); // Outputs "Juliet Obi"



// function addNumbers(a,b){
//   return a+b
// }
// console.log(addNumbers(11,8))

// function calculateRectangleArea(width, height) {
//   let area = width * height;
//   return area;
// }
// console.log(calculateRectangleArea(10, 5))




// function perimetreOfCircle(length, width){
//   return 2*(length + width)
// }
// console.log(perimetreOfCircle(12, 10))


// function calculateRectangularPrismVolume(length, width, height) {
//   let volume = length * width * height;
//   return volume;
// }
// console.log(calculateRectangularPrismVolume(12, 14,12))


// function calculateCircleArea(radius) {
//   let area = Math.PI * radius * radius;
//   return area;

// }
// console.log(calculateCircleArea())

// const area = 22;
// const pi = 3.14;
// const radius = Math.sqrt(area / pi);

// console.log(`The radius of the circle is approximately ${radius.toFixed(3)} cm`);


// function circumferenceOfCircle(radius) {
//   const pi = 3.14;
//   return 2 * pi * radius;
// }

// Example usage
// console.log(circumferenceOfCircle(3)); // Outputs 18.84

/*Create a function that takes a number as an argument.
Add up all the numbers from 1 to the number you passed to the 
function. For example, if the input is 4 then your function should
return 10 because 1 + 2 + 3 + 4 = 10.*/  
// FROM EDABIT
 
 function addNum(item){
     let sum = 0;
     for(let i = 1; i <= item; i++){
       sum += i;
     }
     return sum;
   }
   
   console.log(addNum(5))


   // Your function will be passed two functions, f and g, that don't take any parameters. 
// Your function has to call them, and return a string which indicates which function
//  returned the larger number.
// FROM EDABIT

function whichIsLarger(f, g) {
	if(f>g){
return 'f'
  }else if(g>f){
    return 'g'
  }else{
    return 'neither'
  }
}
console.log(whichIsLarger(10, 14))





// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

// const grade = 60;

// if(grade >= 80 && grade <= 100){
//     console.log('score = A');

// }else if(grade >= 70 && grade < 80){
// console.log('score = B');

// }else if(grade >= 60 && grade < 70){
//   console.log('score = C')

// }else if(grade >= 50 && grade <60){
//   console.log('score = D')

// }else if(grade >= 30 && grade < 40){
//   console.log('score = E')
// }else{
//   console.log('score = F')
// }

   



// Temperature in degree Celsius(oC) can be converted to degree Fahrenheit(oF) using this formula: oF = (oC x 9/5) + 32. Write a function which converts oC to oF convertCelsiusToFahrenheit.

     // function convertCelsiusToFahrenheit(celsius) {
     //      let fahrenheit = (celsius * 9/5) + 32;
     //      return fahrenheit;
     // }
     //    console.log(convertCelsiusToFahrenheit(4));
        
     // Implement a function that takes in an array of integers and 
     //returns the second-highest number in the array.

     const array = [2, 4, 6, 8, 9]
     function seconndHighest()
     
     
     
     
     
     
     
     // function basketBallPoint(twopointers, threepointers){
     //      let twopointerScore = 2 * twopointers;
     //      let threePointerScore = 3 * threepointers;
     //      let totalScore = twopointerScore+ threePointerScore;
     //      return totalScore
     // }
     // console.log(basketBallPoint(10,20))
     
     // function concatenateName(name) {
     //      var result = name + "Edabit";
     //      return result;
     //    }
        
     //    // example usage
     //    console.log(concatenateName("John")); // output: "JohnEdabit"
     //    console.log(concatenateName("Sarah")); // output: "SarahEdabit"
        
     