
const {log} = console;

//UNION OF SETS

// const uData = [1, 2, 3, 4, 5,];
// const uData1 = [2, 3, 4, 6];
// const uData2 = [... uData, uData1];
// const setU = new Set(uData2);
// log(setU)


// INTERSET OF SET FILTER IN SET
//first approach
// const uData = [1, 2, 3, 4, 5,];
// const uData1 = [2, 3, 4, 6];

// const setInter = new Set(uData1);
// const finalData = uData.filter(function(item){
//     return setInter.has(item)
// })

// const finalDataSet = new Set(finalData);
// log( finalDataSet)

// Another Approach

// const setInter = new Set(uData1);
// let finalData = [];
// for(let i = 0; i < uData.length; i++){
// const current = uData[i];
// if(setInter.has(current)){
//     finalData.push(current);
//     }
// } 

// const finalDataSet = new Set(finalData);
// log( finalDataSet)



// const countries = ["Nigeria", " Ghana", "Togo", "Spain", "mardagascar",];

// const final = [];
// countries.forEach(function(item){
//   if(item.length > 6){
//     final.push(item);
//   }
// });
// console.log(final)

// const countries = ["Nigeria", " Ghana", "Togo", "Spain", "mardagascar",];
// using Arrow (=>)function
// const newCountries = [];
// countries.forEach((item) => {
//   if(item.length > 6){
//     newCountries.push(item);
//   }
// });
// log(newCountries)

// write a function that returns my name is first name and last name example1
// let fName = "Juliet"
// let lName = "Obi"
// function fullName(a, b){
//  return "my name is " + a + " " + b;
// }
// console.log(fullName(fName, lName));


// write a function that returns my name is first name and last name example 2
// function fullName(fname, lName){
//   return `my name is ${fname} ${lName}`
// }
// console.log(fullName("Juliet", "Obi"))

// "startsWith" is a method to check if a string starts a sentence
// function beginWith(first, second){
//   return first.startsWith(second)
// }
// console.log(beginWith("Eddie loves food", "loves"))
// console.log(beginWith("Eddie loves eating", "Eddie"))


//A simple example of loop
// let sum = 0;
// for(let i = 0; i<= 5; i++){
//     console.log(i)
// }

// A simple example of loop.
// let sum = 0;
// let numbers = [3, 5, 7]
// let len = numbers.length;
// for(let i = 0; i < len; i++){
//     sum = sum + numbers[i]
// }
// console.log(sum)

// A function that displays days of the week.

// const days = "Wednesday"
// function DaysOfTheWeek(days){
//     if(days === "Monday"){
//         console.log(`yeah! its ${days}`);
//     }else if(days === "Tuesday"){
//         console.log(`its another ${days}`)
//     }else if(days === "Wednesday"){
//         console.log(`its coool ${days}`)
//     }else if(days === "Wednesday"){
//         console.log(`its ${days}`)
//     }else if(days === "Thursday"){
//         console.log(`it's a beautiful ${days}`)
//     }else if(days === "Friday"){
//         console.log(`it is Jumat ${days}`)
//     }else if(days === "Saturday"){
//         console.log(`finaly it is ${days}`)
//     }else{
//         console.log(`its not a day of the week`)
//     }
// }
// DaysOfTheWeek(days)

// A function that displays days of the week using SWITCH.

// const days = "rice"
// function DaysOfTheWeek(days){
//     switch(days){
//         case "Monday":
//             return `its monday`;

//         case "Tuesday":
//             return `it is a cool Tuesday`;

//         case "Wednesday":
//             return `it is a beautiful Wednesday`;

//         case "Wednesday":
//             return `it is a beautiful Thursday`;

//         case "Wednesday":
//            return `it is a beautiful Friday`;

//         case "Wednesday":
//             return `it is a beautiful Saturday`;  

//         case "Wednesday":
//             return `it is a beautiful Sunday`;

//             default: 
//             return `it is Neither of the days`;
//     }
    
// }
// console.log(DaysOfTheWeek(days))



//OBJECTS SECTION

// (Accessing object keys and valuea)

// const myInfo = {
//     firstName: 'Juliet',
//     lastName: 'Samuel',
//     age: 120,
//     country:'Biafra',
//     city:'Anambra',
//     Skills:[
//         'HTML',
//         'CSS',
//         'JavaScript',
//         'React',
//         'Node',
//         'MongoDB',
//         'Python',
//         'D3.js'
//     ],
//     isMarried:false
// }
// console.log(myInfo.firstName)
// console.log(myInfo.lastName)
// console.log(myInfo.age)
// console.log(myInfo.country)
// console.log(myInfo.city)

// console.log(myInfo["Skills"])
// console.log(myInfo["isMarried"])
// console.log(myInfo.firstName)
// console.log(myInfo.firstName)




// const person = {
//     firstName: "Juliet",
//     lastName: "Samuel",
//     fullname: function (){
//         return `${this.firstName} ${this.lastName}`;
//     },
    
// }


// person.friends = [
//     "Eddie",
//     "Quadri",
//     "Ijeoma",
//     "Peter",
//     "Smooth"
// ];
// person.nationality = "Biafra";

// person.firstName = "Precious"

// person.age = "20";

// person.getAge = function (){
//    return `${this.age * 2}`;
// };
// console.log(person.getAge());
// console.log(person)



// const myInfo = {
//     firstName: 'Juliet',
//     lastName: 'Samuel',
//     country:'Biafra',
//     city:'Anambra',
// }

// const copyMyInfo = Object.entries(myInfo);
// console.log(copyMyInfo);

// console.log(myInfo)

// const myInfo = {
//     firstName: 'Juliet',
//     lastName: 'Samuel',
//     country:'Biafra',
//     city:'Anambra',
// }

// const entries = Object.entries(myInfo);
// console.log(entries);

// console.log(myInfo)


//write a function that assign numbers to days of the week such that when you input the number it sshows days of the week.
// function getDay(num){
//     const days = {0: 'Sunday', 1:'Monday', 2:'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5:'Friday', 6:'saturday'}
//     for (key in days){
//         if(key == num){
//             console.log(days[key])
        
//         }
        
//     }

// }

// getDay(6)



// another simpler approach.
// const days = {0: 'Sunday', 1:'Monday', 2:'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5:'Friday', 6:'saturday'}

// console.log(days['3'])

// coppied from web example of mapping in js.
// let arrOne = [32, 45, 63, 36, 24, 11]
// const multFive = (num) => {
// return num * 5; //'num' here, is the value of the array.
// }
// let arrTwo = arrOne.map(multFive)
// console.log(arrTwo)


// Using set to remove duplicate array content.
// const number = [8, 10, 18, 20, 34, 8, 45, 67, 10];
// const newNumber = new Set(number);
// log(newNumber)

//converting the result which is in curly braces back to array.

// const newNumberArr = [...newNumber];
// log(newNumberArr)

// const arr = ['mango', 'orange', 'mango', 'apple', 'carrot'];
// const newArr = new Set(arr);
// log(newArr)

// // const newestArr = [...newArr]
// // log(newestArr)

// const newestArr = []
// for(const item of newArr){
//     newestArr.push(item)
//  }
//  log(newestArr)

// ADD METHOD adding items to an empty or already created set.

// const addData = new Set (arr);
// addData.add("app")
// addData.add("mac")
// addData.add("windows")
// addData.add("itel")
// addData.add("infinix")
// addData.add("tecno")

// log(addData)
//getting the length/size of the variable addData

// log(addData.size)

//DELETE METHOD

// addData.delete("infinix")

// log(addData)


// const list = ["javascript", "java", "python", "java"];
// const addData = new Set(list);
// addData.add("app")
// addData.add("app2")
// addData.add("app3")


// const newDataArr = [...addData]
// log(newDataArr)

// for(let juliet of addData){
//     if (juliet.includes('p')){
//         addData.delete(juliet);
//     }
// }

// log(addData, addData.size)


// another approach to this question

// const setArr = [...addData];
// for(let i = 0; i < setArr.length; i++){
//     const current = setArr[i];
//     if(current.includes("p")){
//         addData.delete(current);
//     }
// }
// log(addData) 

// write a function that increment by 5 a set count value after every 5 seconds
// let count = 0;
// const interval = setInterval(counter, 5000);

// function counter() {
//   count = count + 5;
//   console.log(count);

//   if (count == 30) {
//     clearInterval(interval);
//   }
// }

// forEach
// calculate the multiple by 2 of each item of the given array and total the sum
const arr = [1, 2, 3, 4, 5]; /* [1,4,6] => 60 */

let sum = 0;
let prodArr = [];
arr.forEach((curr) => {
  sum = sum + curr * 2;
  prodArr.push(curr * 2);
});

console.log(sum);

let prodSum = 0;
prodArr.forEach((item) => {
  prodSum += item;
});

console.log(prodSum, "prodSum");

// filter
// perform a search through the foll book list using the title and author field
//and return the search result
const books = [
  { title: "Lord of the Ring", author: "ay", isbn: 1, price: "$200" },
  { title: "Game of thrones", author: "ay", isbn: 2, price: "$300" },
  { title: "wonder", author: "johnson", isbn: 3, price: "$250" },
  { title: "made in black", author: "black", isbn: 4, price: "$400" },
  { title: "james is  back", author: "james", isbn: 5, price: "$500" },
];

function searchBook(books, keyword) {
  const foundBooks = books.filter(
    (book) => book.title.startsWith(keyword) || book.author === keyword
  );
  return foundBooks;
}

console.log(searchBook(books, "made"));

/* { title: "Lord of the Ring", author: "ay", isbn: 1, price: "$200" },
{ title: "Game of thrones", author: "ay", isbn: 2, price: "$300" } */
//searchBook(books, "wonder"); // { title: "wonder", author: "johnson", isbn: 3, price: "$250" }
