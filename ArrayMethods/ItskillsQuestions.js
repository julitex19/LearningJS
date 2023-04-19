
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