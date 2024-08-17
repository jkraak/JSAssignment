// for (let i = 0; i < 13; i++) {
//   console.log (Math.floor(Math.random() * 5) + 1);
// }

// console.log(randomNumber)


// for (let i = 1; i <= 1024; i *= 2) {
//   console.log(i);
// }

// for (let i=10; i>=0; i--) {
// console.log(i)
// }

// const firstNumber= 4;
// const secondNumber= 24;

// let result = firstNumber;

// for (let i= 1; i < secondNumber; i++) {
//   result *= firstNumber;
// }
// console.log(result);

// function power(number1, number2) {
//   let result = number1;
//   for (let i= 1; i < number2; i++) {
//     result *= number1;
//   }
//   return result;
// }
//
// console.log(power(4,24));

const resultsToGenerate = 500;
const numberStart = 1;
const numberEnd = 30;
const divisibleBy = 3;

let results= 0;
let randoms = 0;
while (results < resultsToGenerate) {
  let random = getRandom(numberStart, numberEnd);
  randoms++;
  console.log("Attempt Number: " + randoms);
  if (random % divisibleBy === 0) {
    results++;
    console.log(random);
  }
}

function getRandom(min,max) {
  return Math.floor(Math.random() * max) + min;
}
