// add your solutions here
// Function Exercises

// Positive Numbers

function positiveArray(arr) {
  //   newArray = [];
  //   arr.forEach(function(num) {
  //     if (num > 0) {
  //       newArray.push(num);
  //     //   console.log(num);
  //     }
  //   });
  //   return newArray;

  return arr.filter(arr => arr > 0);
  //   console.log(positiveArray([1, 2, 3, -5, 6, -4]));
}

// Even Numbers
function evenNumbers(arr) {
  return arr.filter(arr => arr % 2 == 0);
  //   console.log(evenNumbers([1, 2, 3, 4, 5, 7, 9, 10, 12, 16]));
}

// Square the Numbers
function squaredNumbers(arr) {
  squaredArray = arr.map(num => num * num);
  return squaredArray;
}
// console.log(squaredNumbers([1, 2, 3, 4, 5]));

// Cities 1

const cities = [
  { name: "Los Angeles", temperature: 60.0 },
  { name: "Atlanta", temperature: 52.0 },
  { name: "Detroit", temperature: 48.0 },
  { name: "New York", temperature: 80.0 }
];

// function coolerThan70(arr) {
//   coolCities = [];
//   arr.forEach(city => {
//     if (city.temperature < 70) {
//       coolCities.push(city);
//     }
//   });

//   return coolCities;
// }

function coolerThan70(arr) {
  return arr.filter(city => city.temperature < 70);
}
coolerThan70(cities);

// Cities 2

function returnCityNames(arr) {
  nameArray = arr.map(city => city.name);
  return nameArray;
}

// Good job!

const people = [
  "Dom",
  "Lyn",
  "Kirk",
  "Autumn",
  "Trista",
  "Jesslyn",
  "Kevin",
  "John",
  "Eli",
  "Juan",
  "Robert",
  "Keyur",
  "Jason",
  "Che",
  "Ben"
];

function goodJob(arr) {
  arr.forEach(x => {
    console.log(`Good job, ${x}!`);
  });
}
goodJob(people);

// 3 times

function call3Times(fun) {
  fun();
  fun();
  fun();
}

function helloWorld() {
  console.log("Hello, world!");
}
call3Times(helloWorld);

// n times
function callNTimes(times, fun) {
  for (let i = 0; i < times; i++) {
    fun();
  }
}
// callNTimes(9, helloWorld);

// Str Multiply

// function range(min, max, str) {
//   const arr = [];
//   for (var i = min; i < max; i++) {
//     arr.push(str);
//   }
//   return arr;
// }

// function strMultiply(str, times) {
//   range(0, times, str);
// }

function strMultiply(str, times) {
  // result = "";
  result = "";
  for (let i = 0; i < times; i++) {
    result += str;
  }
  return result;
}

console.log(strMultiply("abc", 5));

// sort an array
function sortNames(people) {
  sortedNames = people.sort();
  return sortedNames;
}

// sort an array, 2
function sortNameLength(people) {
  sortedNames = people.sort((a, b) => a.length - b.length);
  return sortedNames;
}

// sort an array, 3

const products = [
  { name: "Basketball", price: 12.0 },
  { name: "Tennis Racquet", price: 66.0 },
  { name: "Tennis Balls", price: 9.0 },
  { name: "Tennis Balls", price: 9.0 }
];

function sortPrice(products) {
  sortedNames = products.sort((a, b) => a.price - b.price);
  return sortedNames;
}
