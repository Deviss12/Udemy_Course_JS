/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let person = "Jonas";
let PI = 3.1415;

let myFirstJob = "Engineer";
let myCurrentJob = "Programmer";

console.log(myFirstJob);
*/

/*
true;
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javaScriptIsFun = "YES!";
console.log(javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);
year = 1999;
console.log(year);
console.log(typeof year);

console.log(typeof null);
*/

/*
let age = 30;
age = 31;

const birthYear = 1999;
// birthYear = 2000;

// const job;

/*
var job = "programmer";
job = "teacher";

lastName = "Pukacki";
console.log(lastName);
*/

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2**3 oznacza potęgi czyli 2 do potęgi 3

const firstName = "Jonas";
const lastName = "Schmedtmann";

console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10; // += oznacza x = x + 10 = 25
x *= 4; // *= oznacza x = x * 4 = 100
x++; // ++ oznacza x = x + 1
x--; // -- oznacza x = x - 1
x--; // -- oznacza x = x - 1
console.log(x);

// Operatory porównawcze // odpowiadają w boolean czyli true lub false

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

/*
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`just a regular string...`);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`string
with
multiple
lines`);
*/

/*
const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(
    `Sarah is too young to drive a car. Wait another ${yearsLeft} years 🛑`
  );
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

/*
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(String(23));

console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);
*/

// 5 wartości falsy: 0,'',undefined,null,NaN

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all :)");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("Yay! Height is defined!");
} else {
  console.log("Height is not defined");
}
*/
/*
const age = "18";
if (age === 18) console.log("You just became and adult!(strict)");

if (age == 18) console.log("You just became and adult!(loose)");

const favourite = Number(prompt("What's your favourite number?"));

console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 9 or 7");
}

if (favourite !== 23) console.log("Why not 23?");
*/

/*
const hasDriversLicense = true; // A
const hasGoodVision = true; //B
const isTired = false; //C

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

/*
if (hasDriversLicense && hasGoodVision) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive...");
}
*/
/*
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive...");
}
*/
/*
const day = "thursday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    break;
  case "friday":
    break;
  case "saturday":
  case "sunday":
    break;
  default:
}
*/
/*
if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}
*/

/*
const age = 23;
age >= 18;
// ? console.log("I like to drink wine😊")
// : console.log("I like to drink water😊");

const drink = age >= 18 ? "wine🍷" : "water💦";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine🍷";
} else {
  drink2 = "water💦";
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
*/
