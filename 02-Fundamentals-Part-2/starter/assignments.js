"use strict";
/*
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million peple and its capital city is ${capitalCity}`;
}

const polska = describeCountry("Poland", 34, "Warsaw");
console.log(polska);

const niemcy = describeCountry("Germany", 68, "Berlin");
console.log(niemcy);

const francja = describeCountry("France", 68, "Paris");
console.log(francja);

function percentageOfWorld1(population) {
  return `This country has ${population / 79} % of world's population`;
}

const china = percentageOfWorld1(1440);
console.log(china);

const wakanda = percentageOfWorld1(59);
console.log(wakanda);

const croatia = percentageOfWorld1(26);
console.log(croatia);

const callPopulation = function percentageOfWorld2(population) {
  return `This country has ${population / 79} % of world's population`;
};

const usa = callPopulation(120);
console.log(usa);

const canada = callPopulation(90);
console.log(canada);

const mexico = callPopulation(87);
console.log(mexico);

const arrowPopulation = (population) =>
  `This country has ${population / 79} % of world's population`;

const guatemala = arrowPopulation(12);
console.log(guatemala);

const x = arrowPopulation(11111);
console.log(x);
*/
/*
function percentageOfWorld1(populationPercent) {
  return populationPercent / 79;
}

function describePopulation(country, population) {
  const pop = percentageOfWorld1(population);
  const describe = `${country} has ${population} million people which is about ${pop} % of the world`;
  return describe;
}

const describeChina = describePopulation("china", 1441);
console.log(describeChina);

function calcPopulation(population) {
  return population / 79;
}

function describeCountry(country, population) {
  const populationPercentage = calcPopulation(population);

  const description = `${country} has ${population} million people which is about ${populationPercentage} % of the world`;
  return description;
}

const china = describeCountry("china", 1441);
console.log(china);
*/
/*
const populations = [64, 38, 1441, 620];
console.log(populations.length === 4);

function percentageOfWorld1(population) {
  return `This country has ${population / 79} % of world's population`;
}

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[populations.length - 1]),
];

console.log(percentages);
*/
/*
const neighbours = [
  "ermany",
  "Czechia",
  "Slovakia",
  "Ukraine",
  "Belarus",
  "Russia",
];
console.log(neighbours);

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}

neighbours[neighbours.indexOf("ermany")] = "Germany";
console.log(neighbours.indexOf("Belarus"));
console.log(neighbours.indexOf("Russia"));

neighbours[4] = "Retards";
neighbours[5] = "Retards";
console.log(neighbours);
*/
/*
const myCountry = {
  country: "Poland",
  capital: "Warsaw",
  language: "Polish",
  neighbours: [
    "Germany",
    "Czechia",
    "Slovakia",
    "Ukraine",
    "Belarus",
    "Russia",
  ],
};

console.log(myCountry);
*/
/*
const myCountry = {
  country: "Poland",
  capital: "Warsaw",
  language: "polish",
  population: 38,
  neighbours: [
    "Germany",
    "Czechia",
    "Slovakia",
    "Ukraine",
    "Belarus",
    "Russia",
  ],
  describe: function () {
    return `${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital} `;
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital} `
// );

// myCountry.population += 2;
// console.log(myCountry.population);
// myCountry["population"] -= 2;
// console.log(myCountry.population);

myCountry.describe();
myCountry.checkIsland();

console.log(myCountry);
*/
/*
for (let vote = 1; vote <= 50; vote++) {
  console.log(`Voter number ${vote} is currently voting!🗳️🗳️🗳️`);
}
*/
/*
const populations = [64, 38, 1441, 620];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  percentages2.push(
    `This country has ${populations[i] / 79} % of world's population`
  );

  console.log(percentages2[i]);
}

console.log(percentages2);
*/
/*
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++)
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
*/
