
const {log} = console;


//FILTER IN SET

// const a = [13, 15, 20, 10,];
// const b = [9, 13, 10, 14, 17];
// let A = new Set(a) 
// let B = new Set(b) 
// const c = a.filter((item) => !B.has(item))
// let C = new Set(c)
// log(C)


// MAP IN SET



// const arr = [8, 3, 6, 0, 10, 13, 2, 12, 4, 11, 5, 1, 7, 9];
// const sortedArr = arr.sort(function(a, b){
//     return (a - b)
// })
// log(sortedArr)


// const arr = [8, 3, 6, 0, 10, 13, 2, 12, 4, 11, 5, 1, 7, 9];
// let sortedArr = arr.sort((a,b) => b - a)

// log(sortedArr)


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
// log(findTarget(arrNum,target))


// const arrNum = [8, 3, 6, 0, 10, 13, 2, 12, 4, 11, 5, 1, 7, 9];
// let target = 8;
// const findTarget = (arr, target) =>{
//         for(let i = 0; i < arr.length; i++){
//         if(arr[i] === target){
//             return i;
//         }
//     }
//     return -1
// }

// log(findTarget(arrNum, target))

// const arrNum = [8, 3, 6, 0, 10, 13, 2, 12, 4, 11, 5, 1, 7, 9];

// let target = 0;

// function findTarget(arr, target){
//     return arr.indexOf(target)
// }

// log(findTarget(arrNum, target))

// const arrNum = [8, 3, 6, 0, 10, 13, 2, 12, 4, 11, 5, 1, 7, 9];

// let target = 9;

// const findTarget = (arr, target) => arr.indexOf(target)

// log(findTarget(arrNum, target))



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

// const arrNum = [1, 2, 3, 4, 5, 6];
// let target = 4;
// function search(arr){
//     for(let i =0; i < arr.length; i++){
//         if(arr[i] === target){
//             return i;
//         }
//     }
//     return -1
// }
// log(search(arrNum));

//  function getCentury(year) {
//      if (year % 100 === 0) {
//         return year/100
//       } else {
//     return Math.floor(year/100 + 1)

//     }

// }

// log(getCentury(1705))
// log(getCentury(1900))
// log(getCentury(1655))
// log(getCentury(1705))
// log(getCentury(1995))




// const calculatePerimeter = (radius) => 2 * Math.PI * radius;

// const radius = 28;
// const perimeter = calculatePerimeter(radius);
// console.log(perimeter);


// const calculatePerimeter = function (radius) {
//     return Math.ceil(2 * Math.PI * radius);
//   };
//   const radius = 3;
//   const perimeter = calculatePerimeter(radius);
//   console.log(perimeter);


  
// log((function(a){
//     return a * 4;
// }) (4));


// write a function to display sum of letters where vowel eg (a,e,i,o,u) is 6 and consonant is 1
// for example: code = c=1, o=6, i=6, o=6, u=6; 


// Return the provided string with the first letter of each word capitalized.
//  Make sure the rest of the word is in lower case.For the purpose of this exercise, 
// you should also capitalize connecting words like the and of.


// function titleCase(str) {
//     let words = str;
    
//     for (let i = 0; i < words.length; i++) {
//       words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }
    
//     return words;
//   }
  
//   console.log(titleCase("my name is juliet"));



// Write a function that splits an array (first argument) into groups, the length 
// of size (second argument) and returns them as a two-dimensional array.
// chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]]

// function splitedArra(arr, size) {
//     let result = [];
    
//     while(arr.length > 0) {
//       result.push(arr.splice(0, size));
//     }
    
//     return result;
//   }
  
//   log(splitedArra(["a", "b", "c", "d"], 2));


// Truncate a string (first argument) if it is longer than 
// the given maximum string length (second argument). Return 
// the truncated string with a ... ending.

// function truncString(str, lengthStr){
//   if(str <= lengthStr){
//       return str;
//   }else{
//       return str.slice(0, lengthStr) + "...;"
//   }
// }


// log(truncString("juliet is a good person", 10));

// function setIncreement(){

// }

  // setInterval(() => log(5), 20 * 60)

// setIncreement()


// const number = [3, 8, 1, 2, 5, 9];
// const newArray = number.filter(function(item){
//     if(item !== 5 && item !== 2 && item !== 3){
//         return item
//     }
// })


// console.log(newArray)



// const books = [
//   {tittle: "lord of the ring", author: "ay", isbn: 1, price: "$200"},
//   {tittle: "game of thrones", author: "ay", isbn: 2, price: "$200"},
//   {tittle: "wonder", author: "johnson", isbn: 3, price: "$200"},
//   {tittle: "made in black", author: "black", isbn: 4, price: "$200"},
//   {tittle: "james is back", author: "james", isbn: 5, price: "$200"},
// ];

// // // Filtering books by author name using a normal function
// const filteredBooks = books.filter(function(item) {
//   return item.tittle === "wonder";
// });

// console.log(filteredBooks);

// function searchBook(books, keyword) {
//   const foundBooks = books.filter(
//    (book) => book.tittle.startsWith(keyword) || book.author === keyword
//   );
//   return foundBooks;
// }
// log(searchBook(books, "l"));

// let newArray = [];
// function divisibleByArr(arr, num){
  // for(let i = 0; i < x.length; i++){
  //   if (x[i] % y == 0){
  //     newArray.push('its divisible')
  //   }else{
  //     newArray.push(x[i])
  //   }
  // }
  // return newArray
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] % num == 0){
//       newArray.push('its divisible')
//     }else{
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray
// }
// log(divisibleByArr([2, 4, 3, 6, 5],3))



// function vowelCount(str){
//   let vowels = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;
//   for(let key of str.toLowerCase()){
//     if(vowels.includes(key)){
//       count++;
//     }
//   }
//   return count;
// }

// log(vowelCount('juliet'))




// const books = [
//   {tittle: "lord of the ring", author: "ay", isbn: 1, price: "$200"},
//   {tittle: "game of thrones", author: "ay", isbn: 2, price: "$500"},
//   {tittle: "wonder", author: "johnson", isbn: 3, price: "$200"},
//   {tittle: "made in black", author: "black", isbn: 4, price: "$250"},
//   {tittle: "james is back", author: "james", isbn: 5, price: "$300"},
// ];

// let newPrice = books.price
// const newBooks = books.map(function(item){
//   return item.price.Number(newPrice)
// })


// const newBooks = books.map(function(item){
//   return Number(item.price.replace("$", " "))
// })
// newBooks.reduce((acc, curr) => acc + curr, 0)
// log(newBooks)

// function updatedPrice(books, isbn, updatedPrice){
//   const index = books.findIndex((book) => book.isbn === isbn);
//   books[index].price = `$${updatedPrice}`;
//   return books
// }
// log(updatedPrice(books, 2, 700))

// const books = [
//   {tittle: "lord of the ring", author: "ay", isbn: 1, price: "$200", qty: 2},
//   {tittle: "game of thrones", author: "ay", isbn: 2, price: "$500" ,qty: 5},
//   {tittle: "wonder", author: "johnson", isbn: 3, price: "$200", qty: 4},
//   {tittle: "made in black", author: "black", isbn: 4, price: "$250", qty: 3},
//   {tittle: "james is back", author: "james", isbn: 5, price: "$300", qty: 1},
// ];


// function sortedBooksDecs(books){
//   books.sort((book1, book2) => book2.price - book1.price)
//   return
// }
// log(sortedBooksDecs(books))

// const bookPrices = books.map(function (book) {
//   return Number(book.price.slice(1)) * book.qty;
// });

// log(bookPrices);
 

//  books.sort((book1, book2) => book2.isbn - book1.isbn);
   
//    console.log(books);




// let arr2 = ["password", "cashew", "orange", "banana", "apple"];
// let [, ...rest] = arr2;
// log(rest)


// let arr3 = [ "cashew", "password", "orange", "banana", "apple"];
// let [a1, , ...rest] = arr3;
// rest.unshift(a1)
// log(rest)


// const continent = [
//   {
//     africa:[ 
//       ["lagos","ikeja"],
//       ["oyo","ibadan"],
//       ["kwara","ilorin"],
//     ]
//   }
// ]


// for(let {africa} of continent){
//   for([citya, cityb] of africa){
//     log(citya,cityb)
//   }
// }


// const skills = ['HTML', 'css', 'Js', 'React']
// const skillsJSON = JSON.stringify(skills, undefined, 4)
// localStorage.setItem('skills', skillsJSON) 
// console.log(localStorage)
//Storage (age: '200', firstName: "Asabeneh", skills: 'HTML, CSS, JS, React", Length: 3)


// const data = "Hacking is the act of identifying and then exploiting weaknesses in a computer system or network, usually to gain unauthorized access to personal or organizational data"
// const dataPres = /hack/i
// const result = dataPres.test(data)
// log(result)

// const data = "Hacking is the act of identifying and then exploiting weaknesses in a computer system or network, usually to gain unauthorized access to personal or organizational data"

// function testReg(data, word){
//   const dataPres = /hack/ig
//   if(dataPres.test(data)){
//     return "found";
//   }else{
//     return "not found"
//   }
  
// }

// log(testReg(data, "nne"))

// create a student class that have a constructor class with name, email, age 

class Student{
  constructor(firstName, lastName, email, age, courses,){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.courses = courses
  }
  
  getTheListOfCourses(){
    const courses = this.courses;
    return courses
  }

  // set addCourse(courses){
  //   this.courses.push(courses);
  // }

  set addCourse(courses){
    for (let i = 0; i < courses.length; i++){
      if(courses = []){
        courses.push([i])
      }
    }
  }

}

const student_1 = new Student("juliet", "Samuel", "julitex19@gmail.com", 50, ["js", "vue", "mongoDB", "c++", "React"])

// student_1.addCourse = "html"
// log(student_1)
log(student_1.courses)


