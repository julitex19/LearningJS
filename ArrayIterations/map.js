const number = [3, 8, 1, 2, 5, 9];

// Map method loops through an array and get each item in the array and returns a new array;
// it takes a callback function;


const newArray = number.map(function(item){
    return item * 2;
})

console.log(number); // number is not changed
console.log(newArray);
 