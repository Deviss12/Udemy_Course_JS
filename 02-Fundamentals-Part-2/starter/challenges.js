"use strict";
/*
const calcAverage = (x, y, z) => (x + y + z) / 3;

let scoreDolphins = calcAverage(85, 54, 41);
console.log(scoreDolphins);

let scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win! (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win! (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`The difference is not doubled, noone wins this time`);
  }
}

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(2, 1);

//test 2
scoreDolphins = calcAverage(85, 54, 41);
console.log(scoreDolphins);

scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreKoalas);

checkWinner(scoreDolphins, scoreKoalas);
*/
/*
function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    const tip = bill * 0.15;
    return tip;
  } else {
    const tip = bill * 0.2;
    return tip;
  }
}

const bills = [125, 555, 44];
const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[bills.length - 1]),
];

console.log(tips);

const total = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[bills.length - 1] + tips[tips.length - 1],
];
console.log(total);
*/

//coding challenge #3
/*
const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

mark.calcBMI();
john.calcBMI();

function compareBMI(mark, john) {
  if (mark.BMI > john.BMI) {
    console.log(
      `${mark.firstName}'s BMI(${mark.BMI}) is higher than ${john.firstName}'s (${john.BMI})!`
    );
  } else {
    console.log(
      `${john.firstName}'s BMI(${john.BMI}) is higher than ${mark.firstName}'s (${mark.BMI})!`
    );
  }
}

compareBMI(mark, john);
*/

//challenge #4
/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    const tip = bill * 0.15;
    return tip;
  } else {
    const tip = bill * 0.2;
    return tip;
  }
}

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

// let sum = 0;

// for (let y = 0; y < totals.length; y++) {
//   sum += totals[y];
//   arr.push(sum);
// }

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(bills);
console.log(tips);
console.log(totals);

console.log(calcAverage(totals));
*/
