const numberOfRolls = 10000;
const highestResult= 6;

const rollArray = [];

for (let i = 0; i < highestResult; i++) {
  rollArray.push(0);
}

for (let i = 0; i < numberOfRolls; i++) {
  const rollResult= (Math.floor(Math.random() * highestResult));
  rollArray[rollResult] += 1;
}

for (let i = 0; i < rollArray.length; i++) {
  console.log("I rolled " + i + " a total of " + rollArray[i] + " times.");
}



//Create loop that generates 10000 random numbers between 0 and 10.


  //Store results of random rolls in an array
  //Read array and extract number of times each result occurred

