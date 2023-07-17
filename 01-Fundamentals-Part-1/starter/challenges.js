/*
const markMassA = 78;
const markHeightA = 1.69;
const johnMassA = 92;
const johnHeightA = 1.95;

const markMassB = 95;
const markHeightB = 1.88;
const johnMassB = 85;
const johnHeightB = 1.76;

const markBmiA = (markMassA / markHeightA ** 2).toFixed(2);
const johnBmiA = (johnMassA / johnHeightA ** 2).toFixed(2);

const markBmiB = (markMassB / markHeightB ** 2).toFixed(2);
const johnBmiB = (johnMassB / johnHeightB ** 2).toFixed(2);

const markHigherBmiA = markBmiA > johnBmiA;
const markHigherBmiB = markBmiB > johnBmiB;

/*
console.log(markBmiA, johnBmiA, markBmiB, johnBmiB);
console.log(markHigherBmiA, markHigherBmiB);
*/

/*
if (markBmiA > johnBmiA) {
  console.log(`Mark's BMI (${markBmiA}) is higher than John's(${johnBmiA})!`);
} else {
  console.log(`Mark's BMI (${markBmiA}) is lower than John's(${johnBmiA})!`);
}

if (markBmiB > johnBmiB) {
  console.log(`Mark's BMI (${markBmiB}) is higher than John's(${johnBmiB})!`);
} else {
  console.log(`Mark's BMI (${markBmiB}) is lower than John's(${johnBmiB})!`);
}

*/

//coding challenge#3
/*
let dolphinsScore1 = 96;
let dolphinsScore2 = 108;
let dolphinsScore3 = 89;

let koalasScore1 = 88;
let koalasScore2 = 91;
let koalasScore3 = 110;

const dolphinsAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
console.log(dolphinsAverage, koalasAverage);

if (dolphinsAverage === koalasAverage) {
  console.log("Draw!!!");
} else if (dolphinsAverage > koalasAverage) {
  console.log(
    `Dolphins are the winner with ${
      dolphinsAverage - koalasAverage
    } points advantage!`
  );
} else {
  console.log("Koalas are the winner!");
}
*/
// Bonus 1

/*
let dolphinsScore1 = 97;
let dolphinsScore2 = 112;
let dolphinsScore3 = 101;

let koalasScore1 = 109;
let koalasScore2 = 95;
let koalasScore3 = 123;

const dolphinsAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
console.log(dolphinsAverage, koalasAverage);

if (dolphinsAverage === koalasAverage) {
  console.log("draw!!!");
} else if (dolphinsAverage <= 100 && koalasAverage <= 100) {
  console.log("Both teams are under 100 points, we need a rematch!");
} else if (dolphinsAverage <= 100) {
  console.log("Dolphins are under 100 points so the winner is Koalas!");
} else if (koalasAverage <= 100) {
  console.log("Koalas are under 100 points so the winner is Dolphins!");
} else if (dolphinsAverage > koalasAverage) {
  console.log(
    `Dolphins are the winner with ${
      dolphinsAverage - koalasAverage
    } points advantage!`
  );
} else {
  console.log("Koalas are the winner!");
}
*/
/*
//bonus 3


let dolphinsScore1 = 97;
let dolphinsScore2 = 112;
let dolphinsScore3 = 101;

let koalasScore1 = 109;
let koalasScore2 = 95;
let koalasScore3 = 106;

const dolphinsAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
console.log(dolphinsAverage, koalasAverage);

if (dolphinsAverage <= 100 && koalasAverage <= 100) {
  console.log("Both teams are under 100 points, we need a rematch!");
} else if (dolphinsAverage === koalasAverage) {
  console.log("draw!!!");
} else if (dolphinsAverage <= 100) {
  console.log("Dolphins are under 100 points so the winner is Koalas!");
} else if (koalasAverage <= 100) {
  console.log("Koalas are under 100 points so the winner is Dolphins!");
} else if (dolphinsAverage > koalasAverage) {
  console.log(
    `Dolphins are the winner with ${
      dolphinsAverage - koalasAverage
    } points advantage!`
  );
} else {
  console.log("Koalas are the winner!");
}
*/
/*
//coding challege #4

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value was ${
    bill + tip
  }`
);

console.log(
  `The bill was ${bill}, the tip was ${
    bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
  }, and the total value was ${
    bill + (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2)
  }`
);
*/
