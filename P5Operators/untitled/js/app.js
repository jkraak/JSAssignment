const speedInKmH = 72;
const speedInMpH = speedInKmH * 1000;
const speedinMpS= speedInMpH / 3600;
console.log(speedinMpS);


const numberOfMinutes = 3;
const numberOfSeconds = numberOfMinutes * 60;
console.log(numberOfSeconds);

const x = 11;
const y = 4;
const z=x / y;

console.log(z)

const d = x % y;
console.log(d);

const radius = 2;

const areaOfCircle= Math.PI * (radius * radius);
console.log(areaOfCircle);

const e = 11;
const f= -e;
console.log(f);

const weightInKg= 70;
const heightInM = 1.82;

const bMI = weightInKg/ Math.pow(heightInM, 2);
console.log(bMI);

const sideA = 3;
const sideB = 4;
const hypotenuse = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
console.log(hypotenuse);

const seconds = 111;
const minutes = seconds / 60;
const remainingSeconds= seconds % 60;
const remainingMinutes = Math.floor(minutes)
console.log(remainingMinutes);
console.log(remainingSeconds);


