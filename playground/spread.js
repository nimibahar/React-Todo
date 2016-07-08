// function add (a, b) {
//   return a + b;
// }

// console.log(add(3, 1))

// var toAdd = [9, 5];
// console.log(add(...toAdd));
//

// var groupA = ['jen', 'Cory'];
// var groupB = ['Laura'];
// var final = [...groupB, 3, ...groupA];

// console.log(final);


var person = ['Nimi', 31];
var personTwo = ['Laura', 30];

function greet(name, age) {
  console.log('Hi ' +name + ', you are ' + age);
}

greet(...person);
greet(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Nimi', ...names];

final.forEach(function (name) {
  console.log('Hi ' + name)
});










