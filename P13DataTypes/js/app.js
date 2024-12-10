const numbers = [7,3,5,9,1];

for (let i= 0; i<=10; i++) {
 numbers.push(generateRandomNumber());
}

console.log(numbers);

numbers.sort();
console.log(numbers)

printNumbersInSequence();
printNumbersInReverse();

// numbers.forEach((element) => {console.log (element)});

function generateRandomNumber () {
  return Math.floor(Math.random() * 9)
}
// console.log(generateRandomNumber());

 function printNumbersInSequence() {
   for (let i= 0; i < numbers.length ; i++) {
     console.log(numbers[i]);
   }
 }
function printNumbersInReverse() {
   for (let i= numbers.length - 1; i>=0; i--) {
     console.log(numbers[i]);
   }
}
