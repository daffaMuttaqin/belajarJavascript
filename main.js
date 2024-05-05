let movies = ["Thor", "Minions", "Top Gun", "Jurassic World"];

// for (let i = 0; i < movies.length; i++) {
//   console.log(movies[i]);
// }

// function consoleLog(title) {
//   console.log(title);
// }

// movies.forEach(function (title) {
//   console.log(title);
// });

// let array1 = movies.filter(function (title) {
//   return title[0] == "T";
// });

// let array2 = movies.filter(function (title) {
//   return title.includes(" ");
// });

// let array3 = movies.map(function (title) {
//   return title.toUpperCase();
// });

let array3 = movies.map(function (title) {
  return title.slice(0, 3);
});

console.log(array3);
