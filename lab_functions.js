// Create the following functions and test them by logging out their return value.

// MVP

// Part 1

var myNumbers = [1,2,3,4,5,6,7,8]

// 1.a Total the numbers - Create a function that takes in an array of numbers as an argument and calculates the sum of the array's numbers.
// function sumArray(array) {
//   var total = 0;
//   for (num of array) {
//     total += num;
//   }
//   return total;
//
// }
// console.log(sumArray(myNumbers));

// 1.b Find the evens - Create a function that takes in an array of numbers as an argument and returns a new array containing just the even numbers.

// function findEven(array) {
// var myEvenNumbers = [];
//   for (num of array) {
//     if (num % 2 == 0) {
//       myEvenNumbers.push(num);
//     }
//   }
//   return myEvenNumbers;
//
// }
// console.log(findEven(myNumbers));

// Part 2

// var myBill = [
//   {
//     meal: 'Green Curry',
//     price: 10,
//     customer: 'Sally'
//   }, {
//     meal: 'Sea Bass',
//     price: 12,
//     customer: 'Upul'
//   }, {
//     meal: 'Fish and Chips',
//     price: 10,
//     customer: 'Rita'
//   }, {
//     meal: 'Stick Toffee Pudding',
//     price: 4,
//     customer: 'Upul'
//   }, {
//     meal: 'Apple Pie',
//     price: 5,
//     customer: 'Sally'
//   }
// ]
//
// // 2.a. Total the bill - Create a function that takes in a bill as an argument and calculates the total cost of the bill.
// function billTotal(mealTotal) {
// var total = 0;
// for (mealPrice of mealTotal) {
//   total += mealPrice.price;
// }
// return total;
// }
// console.log(billTotal(myBill));
//
// // 2.b. Find meals by customer name - Create a function that takes in a bill and a customer name as an argument and returns a new array containing all the items for that customer.
//
// function personMeal(mealTotal, person) {
// var mealItems = [];
//   for (meal of mealTotal) {
//     if (meal.customer == person) {
//       mealItems.push(meal.meal);
//     }
//   }
//   return mealItems;
// }
// console.log(personMeal(myBill, 'Sally'));
//
// // 2.c. Using the functions you wrote in part 4 and 5, find the total that Sally spent.
//
// function personMealPrice(mealTotal, person) {
// var mealItems = [];
// var total = 0;
//   for (meal of mealTotal) {
//     if (meal.customer == person) {
//       mealItems.push(meal.meal);
//       total += meal.price;
//     }
//   }
//   console.log(`${person} ate ${mealItems} and it cost: ${total}`);
// }
// personMealPrice(myBill, 'Sally');
// // 2.d. Find average item price - Create a function that takes in bill as an argument and calculates the average price of all the items.
//
// function billTotal(mealTotal) {
// var total = 0;
// var average = 0;
// for (mealPrice of mealTotal) {
//   total += mealPrice.price;
// }
// average = total / mealTotal.length;
// return average;
// }
// console.log(billTotal(myBill));

// Extension

// Part 3
// Have a look at the following bodyBuilder object.

var bodyBuilder = {
  strength: 2,
  workOut: (mins) => {
   bodyBuilder.strength = bodyBuilder.strength * mins;
  }
}

// 3.a. Log out the the bodyBuilder's strength - the value should be 2.

console.log(bodyBuilder.strength);

// 3.b. Use the workOut function to update the bodyBuilder's strenth.

bodyBuilder.workOut(5);
console.log(bodyBuilder.strength);

// 3.c. Create another function on the bodyBuilder called `lazeAbout`, that takes in a number of hours as an argument. Decrease the bodyBuilder's strength by dividing the strength by the number of hours.

var lazeAbout = (hours) => {
  bodyBuilder.strength /= hours;
  return bodyBuilder.strength
}
console.log(lazeAbout(4));
