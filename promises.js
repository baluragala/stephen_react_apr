// console.log(1);
// console.log(2);
// setTimeout(() => {
//   console.log(3);
//   console.log(4);
//   setTimeout(() => {
//     console.log(5);
//     console.log(6);
//   }, 100);
// }, 100);

let pfor3 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve(3);
  }, 100);
});

let pfor5 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve(5);
  }, 100);
});

console.log(1);
console.log(2);
pfor3
  .then(d => {
    console.log(d);
    console.log(4);
    return pfor5;
  })
  .then(d => {
    console.log(d);
    console.log(6);
  });
