// var x = 3;

// function func(randomize) {
//   if (randomize) {
//     var x = Math.random();
//     return x;
//   }
//   return x;
// }

// console.log(func(false));

var x = 3;

function func(randomize) {
  if (randomize) {
    let x = Math.random();
    return x;
  }
  return x;
}

console.log(func(false));

var height = 7;
if (height > 6) {
  var part1 = "You are";
  let part2 = "feet tall";
  console.log(`${part1} ${height} ${part2}`);
}

console.log(part1);
console.log(part2);
