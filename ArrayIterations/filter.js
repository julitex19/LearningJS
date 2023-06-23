const number = [3, 8, 1, 2, 5, 9];

// Filter method loops through an array and get each item in the array and returns a new array;
// it takes a callback function;


const newArray = number.filter(function(item){
    if(item !== 5 && item !== 2 && item !== 3){
        return item
    }
})


console.log(newArray)
