const ages = [25, 35, 54, 64, 95];

function devide(ages){
    return ages.map(function(item){
        return item/5
    })
}
const answer = devide(ages)
console.log(answer)



// const boys = ['kwankwaso', 'obi', 'atiku', 'tinubu'];

// function favourites(boys){
//   return boys.filter(function(item){
//     if(item === 'obi' || item){
//       return item
//     }
//   })
// }

// // const result = favourites(boys) 

// console.log(favourites(boys))