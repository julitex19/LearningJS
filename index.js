// const timesToRepeat = 5;
// const character = ''; 

// // let answer = " ";
// // for(let i = 0; i < timesToRepeat; i++){
// //     answer = answer + character;
// // }
// console.log("".padStart(timesToRepeat, character));
// const cars = ['venza', 'camry', 'lambo', 'lexus', 'ford', 'matrix'];
// let result = [];
// function brandOfCars(cars){
//      for(let i = 0; i < cars.length; i++){
// cars[i] = (cars[i]).toUpperCase();

//      }
//      return cars;
// }
// console.log(brandOfCars(cars))

// const ages = [25, 35, 54, 64, 95];

// function devide(ages){
//     return ages.map(function(item){
//         return item/5
//     })
// }
// const answer = devide(ages)
// console.log(answer)

const boys = ['kwankwaso', 'obi', 'atiku', 'tinubu'];

function favourites(boys){
  return boys.filter(function(item){
    if(item === 'obi' || item){
      return item
    }
  })
}

// const result = favourites(boys) 

console.log(favourites(boys))
