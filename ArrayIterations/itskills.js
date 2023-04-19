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