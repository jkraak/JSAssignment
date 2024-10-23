const speedInKmH = 72;

function speedConverter(speedInput) {
  return speedInput * 1000 / 3600;
}
console.log(speedConverter(speedInKmH))

const numberOfMinutes = 3;
// const numberOfSeconds = numberOfMinutes * 60;
// console.log(numberOfSeconds);

function secondConverter(minuteInput) {
  return minuteInput * 60;
}
console.log(secondConverter(numberOfMinutes));

const x = 11;
const y = 4;
// const z=x / y;

function division (divisionInput1, divisionInput2) {
  return divisionInput1 / divisionInput2;
}
console.log (division(x,y));

// console.log
// console.log(z)

// const d = x % y;
// console.log(d);

function remainderCalculation(remainderInput1, remainderInput2) {
  return remainderInput1 % remainderInput2;
}
console.log(remainderCalculation (x,y));

const radius = 2;
// const areaOfCircle= Math.PI * (radius * radius);
// console.log(areaOfCircle);

function circleAreaCalculation(radiusInput) {
  return Math.PI * (radiusInput * radiusInput);
}
console.log(circleAreaCalculation(radius));

const e = 11;
// const f= -e;
// console.log(f);

function negation(positiveInput) {
  return -positiveInput;
}
console.log(negation (e));

const weightInKg= 70;
const heightInM = 1.82;

// const bMI = weightInKg/ Math.pow(heightInM, 2);
// console.log(bMI);

function bmiCalculator(weightInput,heightInput) {
  return weightInput / Math.pow(heightInput,2);
}
console.log(bmiCalculator(weightInKg,heightInM));

const sideA = 3;
const sideB = 4;
// const hypotenuse = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
// console.log(hypotenuse);

function hypotenuseCalculator(sideAInput,sideBInput) {
  return Math.sqrt(Math.pow(sideAInput, 2) + Math.pow(sideBInput, 2));
}
console.log(hypotenuseCalculator(sideA,sideB));

let seconds = 195;
// const minutes = seconds / 60;
// const remainingSeconds= seconds % 60;
// const remainingMinutes = Math.floor(minutes)
// console.log(remainingMinutes);
// console.log(remainingSeconds);

function timeConverter(secondsInput) {
  return Math.floor(secondsInput/60) + " minutes " + (secondsInput % 60) + " seconds";
}
console.log (timeConverter(seconds));

function timeConverter2(secondsInput) {
  const minutes = seconds / 60;
  const remainingSeconds= seconds % 60;
  const remainingMinutes = Math.floor(minutes)

  return remainingMinutes + " minutes " + remainingSeconds + " seconds";
}
console.log (timeConverter2(seconds));
