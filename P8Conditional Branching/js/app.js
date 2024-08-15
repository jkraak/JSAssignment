let birthYear= 2003;
let favouriteNumber= 21;
let age= 2024 - birthYear;

let isChild = 0 <= age && age <= 10;
let isTeenager = 11 <= age && age <= 17;
let isAdult = age >= 18;

if(isChild) {
  console.log("Child");
}
else if (isTeenager) {
  console.log("Teenager");
}
else if (isAdult) {
  console.log("Adult");
}
else {
  console.log ("Unborn horror")
}

// if (age > favouriteNumber) {
//   console.log ("Age is higher");
// }
// else if (age == favouriteNumber) {
//   console.log("Age and favourite number are the same");
// }
//
// else if (age < favouriteNumber) {
//   console.log ("Age is lower");
// }

if(age<favouriteNumber) {
  console.log(favouriteNumber);
}

else if (age === favouriteNumber) {
  console.log("Congratulations on " + favouriteNumber + " laps around the sun!");
}
else {
  console.log(age);
}

// if (favouriteNumber % 2 == 0) {
//   console.log (favouriteNumber + " is even!");
// }
//
// else {
//   console.log(favouriteNumber + " is odd!");
// }

let evenOdd = favouriteNumber % 2 === 0 ? "even" : "odd";
console.log( "Your favourite number, " + favouriteNumber + ", is " + evenOdd + "!");
