// LECTURE: Values and Variables
// 1. Declare variables called ‘country’, 'continent' and 'population' and assign their
// values according to your own country (population in millions4, is four million)
// 2. Log their values to the console

const country = "india";
const continent = "asia";
let population = 14000000;

console.log(country, continent, population);

// LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your country.
// The variable should hold a Boolean value. Also declare a variable 'language', but
// don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language' to the console

const isIsland = false;
let language = "";
console.log(typeof isIsland, typeof population, typeof country, typeof language);

// LECTURE: let, const and var
// 1. Set the value of 'language' to the language spoken where you live (some
// countries have multiple languages, but just choose one)
// 2. Think about which variables should be const variables (which values will never
// change, and which might change?). Then, change these variables to const.
// 3. Try to change one of the changed variables now, and observe what happens

language = "malayalam";

// 1. If your country split in half, and each half would contain half the population, then
// how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?
// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?
// 5. Based on the variables you created, create a new variable 'description' which
// contains a string with this format: 'Portugal is in Europe, and its 11 million people
// speak portuguese'

let half = population / 2;
console.log(half);
population = population + 1;
console.log(population);

let finland = 6000000;
let highestpopulation = population > finland;
console.log(highestpopulation);
let averagepopulation = 33000000;
let lesspeople = population < averagepopulation;
console.log(lesspeople);

let description = "Portugal is in Europe, and its 11 million people speak portuguese";
console.log(description);

//    LECTURE: Taking Decisions: if / else Statements
// 1. If your country's population is greater than 33 million, log a string like this to the
// console: 'Portugal's population is above average'. Otherwise, log a string like
// 'Portugal's population is 22 million below average' (the 22 is the average of 33
// minus the country's population)
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original

if (population > 33000000) {
  console.log("Portugal's population is above average");
} else {
  let belowaverage = 33000000 - population;
  console.log(`Portugal's population is ${belowaverage} million below average`);
}

// 1. Predict the result of these 5 operations without executing them:
// '9' - '5';
// '19' - '13' + '17';
// '19' - '13' + 17;
// '123' < 57;
// 5 + 6 + '4' + 9 - 4 - 2;
// 2. Execute the operations to check if you were right

let a = "9" - "5";
console.log(a);
let b = "19" - "13" + "17";
console.log(b);
let c = "19" - "13" + 17;
console.log(c);
let d = "123" < 57;
console.log(d);
let e = 5 + 6 + "4" + 9 - 4 - 2;
console.log(e);

// 1. Declare a variable 'numNeighbours' based on a prompt input like this:
// prompt('How many neighbour countries does your country have?');
// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose
// equality == for now)
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
// is greater than 1
// 4. Use an else block to log 'No borders' (this block will be executed when
// 'numNeighbours' is 0 or any other value)
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// 6. Change == to ===, and test the code again, with the same values of
// 'numNeighbours'. Notice what happens when there is exactly 1 border! Why is
// this happening?
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now
// when you input 1
// 8. Reflect on why we should use the === operator and type conversion in this
// situation

// let numNeighbours = prompt('How many neighbour countries does your country have?');

// if(numNeighbours==1){
//     console.log('Only 1 border!');
// }
// else if(numNeighbours>=1){
//     console.log("More than 1 border");

// }
// else{
//     console.log('No borders');

// }

// LECTURE: Logical Operators
// 1. Comment out the previous code so the prompt doesn't get in the way
// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a
// country that speaks english, has less than 50 million people and is not an
// island.
// 3. Write an if statement to help Sarah figure out if your country is right for her. You
// will need to write a condition that accounts for all of Sarah's criteria. Take your
// time with this, and check part of the solution if necessary.
// 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
// not, log 'Portugal does not meet your criteria :('
// 5. Probably your country does not meet all the criteria. So go back and
// temporarily change some variables in order to make the condition true (unless
// you live in Canada)

if (population < 50000000 && language == "english" && isIsland == false) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`You should not live in ${country}`);
}

// 1. Use a switch statement to log the following string for the given 'language':
// chinese or mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too'

// const languages = prompt("enter the languge");

// switch (languages) {
//   case "chinese":
//     console.log("MOST number of native speakers!");

//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers");

//     break;
//   case "english":
//     console.log("3rd place");

//     break;
//   case "hindi":
//     console.log("Number 4");
//     break;
//   case "arabic":
//     console.log("5th most spoken language");
//     break;

//   default:
//     console.log("Great language too");

//     break;
// }

// 1. If your country's population is greater than 33 million, use the ternary operator
// to log a string like this to the console: 'Portugal's population is above average'.
// Otherwise, simply log 'Portugal's population is below average'. Notice how only
// one-word changes between these two sentences!
// 2.
// After checking the result, change the population temporarily to 13 and then
// to 130. See the different results, and set the population back to original.

let pop = population > 3000000 ? `${country} population is above average` : `${country}population is below average`;
console.log(pop);

// 1. Write a function called describeCountry which takes three parameters:
// country, population and capitalCity. Based on this input, the function returns
// a string with this format: 'Finland has 6 million people and its capital city is
// Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console

const describeCountry = (a, b, c) => {
  return `${a} has ${b} people and its capital city is ${c}`;
};

console.log(describeCountry("Finland", 6, "Helsinki"));
console.log(describeCountry("Finland", 5, "Helsinki"));
console.log(describeCountry("Finland", 7, "Helsinki"));

// 1. The world population is 7900 million people. Create a function declaration
// called percentageOfWorld1 which receives a population value, and returns the
// percentage of the world population that the given population represents. For
// example, China has 1441 million people, so it's about 18.2% of the world
// population
// 2. To calculate the percentage, divide the given 'population' value by 7900 and
// then multiply by 100
// 3. Call percentageOfWorld1 for 3 populations of countries of your choice, store
// the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called
// percentageOfWorld2, and also call it with 3 country populations (can be the
// same populations).

const percentageOfWorld1 = (population) => {
  return (population / 7900000000) * 100;
};

let per = percentageOfWorld1(100000000);

console.log(percentageOfWorld1(200000000));
console.log(percentageOfWorld1(300000000));

// LECTURE: Functions Calling Other Functions
// 1. Create a function called describePopulation. Use the function type you like the
// most. This function takes in two arguments: 'country' and 'population', and
// returns a string like this: 'China has 1441 million people, which is about 18.2% of
// the world.'
// 2. To calculate the percentage, describePopulation call the
// percentageOfWorld1, you created earlier
// 3. Call describePopulation with data for 3 countries of your choice

const describePopulation = (country, population) => {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)} of the world.`;
};

console.log(describePopulation("india", 10000));
console.log(describePopulation("china", 20000));
console.log(describePopulation("usa", 30000));

// LECTURE: Introduction to Arrays
// 1. Create an array containing 4 population values of 4 countries of your choice.
// You may use the values you have been using previously. Store this array into a
// variable called populations
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called percentages containing the percentages of the world
// population for these 4 population values. Use the function percentageOfWorld1
// that you created earlier to compute the 4 percentage values

let populations = [100000000, 200000000, 300000000, 400000000];
console.log(populations.length == 4);

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];

console.log(percentages);

// LECTURE: Basic Array Operations (Methods)
// 1. Create an array containing all the neighbouring countries of a country of your
// choice. Choose a country which has at least 2 or 3 neighbours. Store the array
// into a variable called neighbours
// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of
// your selected country. So, add it to the end of the neighbours array
// 3. Unfortunately, after some time, the new country is dissolved. So, remove it from
// the end of the array
// 4. If the neighbours array does not include the country ‘Germany’, log to the
// console: 'Probably not a central European country'
// 5. Change the name of one of your neighbouring countries. To do that, find the
// index of the country in the neighbours array, and then use that index to change
// the array at that index position. For example, you can search for 'Sweden' in the
// array, and then replace it with 'Republic of Sweden'.

let neighbours = ["spain", "france", "germany", "norway", "denmark"];
neighbours.push("utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes("germany")) {
  console.log("Probably not a central European country");
} else {
  console.log("Probably a central European country");
}
const index = neighbours.indexOf("france");
console.log(index);
neighbours[index] = "repaplic of france";
console.log(neighbours);

// LECTURE: Introduction to Objects
// 1.   Create an object called myCountry for a country of your choice, containing
// properties country, capital, language, population and neighbours (an array like
// we used in previous assignments)

const myCountry = {
  country: "india",
  capital: "New Delhi",
  language: "Hindi",
  population: 138,
  neighbours: ["pakisthan", "bengladesh", "nepal", "butan"],
};

// LECTURE: Dot vs. Bracket Notation
// 1. Using the object from the previous assignment, log a string like this to the
// console: 'Finland has 6 million finnish-speaking people, 3 neighbouring
// countries and a capital called Helsinki.'
// 2. Increase the country's population by two million using dot notation, and then
// decrease it by two million using brackets notation.

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry["language"]}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry.population);

// LECTURE: Object Methods
// 1. Add a method called describe to the myCountry object. This method will log a
// string to the console, similar to the string logged in the previous assignment,
// but this time using the 'this' keyword.
// 2. Call the describe method
// 3. Add a method called checkIsland to the myCountry object. This method will
// set a new property on the object, called isIsland.
// isIsland will be true if there are no neighbouring countries, and false if there
// are. Use the ternary operator to set the property.

myCountry.describe = function () {
  console.log(`${this.country} has ${this.population} million ${this["language"]}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
};
myCountry.describe();

myCountry.checkIsland = function () {
  return this.neighbours.length == 0 ? (this.isIsland = false) : (this.isIsland = true);
};

console.log(myCountry.checkIsland());
console.log(myCountry);

// LECTURE: Iteration: The for Loop
// 1.  There are elections in your country! In a small town, there are only 50 voters.
// Use a for loop to simulate the 50 people voting, by logging a string like this to
// the console (for numbers 1 to 50): 'Voter number 1 is currently voting'

for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

// LECTURE: Looping Arrays, Breaking and Continuing
// 1. Let's bring back the populations array from a previous assignment
// 2. Use a for loop to compute an array called percentages2 containing the
// percentages of the world population for the 4 population values. Use the
// function percentageOfWorld1 that you created earlier
// 3. Confirm that percentages2 contains exactly the same values as the
// percentages array that we created manually in the previous assignment, and
// reflect on how much better this solution is

const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);

// LECTURE: Looping Backwards and Loops in Loops
// 1. Store this array of arrays into a variable called listOfNeighbours
// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
// 2. Log only the neighbouring countries to the console, one by one, not the entire
// arrays. Log a string like 'Neighbour: Canada' for each country
// 3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
// worry if it's too difficult for you! But you can still try to figure this out anyway

const listOfNeighbours = [["Canada", "Mexico"], ["Spain"], ["Norway", "Sweden", "Russia"]];
console.log(listOfNeighbours);

for (let i = 0; i < listOfNeighbours.length; i++) {
  let neighbours = listOfNeighbours[i];
  console.log(neighbours);

  for (let j = 0; j < neighbours.length; j++) {
    console.log(neighbours[j]);
  }
}

//   LECTURE: The while Loop
// 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and
// Continuing', but this time using a while loop (call the array percentages3)
// 2. Reflect on what solution you like better for this task: the for loop or the while
// loop?

let percentages3 = [];
let i = 0;
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}
console.log(percentages3);

// =======================================================Coding Challenged Part-1 ==========================================================//

// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated
// using the formula: BMI = mass / (height * height) (mass in kg and height in
// meters).
// Your task is to write some code to help them:
// 1. Store Mark's and John's mass and height in variables
// called massMark, heightMark, massJohn and heightJohn.
// 2. Calculate both their BMIs using the formula, and store the results in two
// variables called BMIMark and BMIJohn.
// 3. Log the value of BMIMark and BMIJohn to the console.
// 4. BONUS: Create a Boolean variable markHigherBMI containing information about
// whether Mark has a higher BMI than John. Log it to the console too
// Test data:
// • Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// • Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark);
console.log(BMIJohn);

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it:
// 1. Print a nice output to the console, telling the user who has the higher BMI. The
// message can be either:
// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".
// 2. Modify the outputs above to use template literals to include the BMI values in the
// outputs.
// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI
// (29.1) is higher than Mark's (27)!".
// Note: Don't round the BMI values. Leave them as they are.

console.log(BMIMark > BMIJohn ? "Mark's BMI is higher than John's!" : "John's BMI is higher than Mark's!");
console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn}`);

// Coding Challenge #3
// There are two gymnastics teams: Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data included below.
// The average score for Dolphins should be assigned to the scoreDolphins variable,
// and the average score of Koalas should be assigned to the scoreKoalas variable.
// 2. Compare the team's average scores to determine the winner of the competition,
// and print to the console:
// "Dolphins win the trophy" if Dolphins win, or
// "Koalas win the trophy" if Koalas win, or
// "Both win the trophy" if their average scores are equal.
// Test data:
// • Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// • Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// • Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;
if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy");
} else {
  console.log("Both win the trophy");
}

scoreDolphins = (97 + 112 + 101) / 3;
scoreKoalas = (109 + 95 + 123) / 3;
if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy");
} else {
  console.log("Both win the trophy");
}

scoreDolphins = (97 + 112 + 101) / 3;
scoreKoalas = (109 + 95 + 106) / 3;
if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy");
} else {
  console.log("Both win the trophy");
}

// Coding Challenge #4
// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant.
// In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value
// is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called tip for
// this. It's not allowed to use an if...else statement (if it's easier for you, you can
// start with an if...else statement, and then try to convert it to a ternary
// operator).
// 2. Print a string to the console containing the bill value, the tip, and the final
// value (bill + tip).
// Example: The bill was 275, the tip was 41.25, and the total value 316.25.
// Note: Use the values of the bill and tip variables to construct this string. Don't
// hard-code them
// TEST DATA: Test with different bill values: 275, 40, and 430

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? 0.15 : 0.2;
const total = bill + bill * tip;
console.log(total);

// ========================coding Challenges Part-2 =====================================//

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function calcAverage to calculate the average of 3 scores.
// This function should have three parameters and return a single number (the
// average score).
// 2. Create two new variables — scoreDolphins and scoreKoalas, and assign the
// value returned from the calcAverage function to them (you will need to call
// this function, and pass scores as arguments).
// 3. Create a function checkWinner that takes the average score of each team as
// parameters (avgDolphins and avgKoalas), and then logs the winner to the
// console, together with the victory points, according to the rule above.
// Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of
// hard-coded values).
// 4. Use the checkWinner function to determine the winner for both DATA
// 1 and DATA 2.
// 5. Ignore draws this time. Instead, log No team wins... to the console if there is
// no winner.
// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
// 3
// The Comp

const calcAverage = (a, b, c) => {
  return (a + b + c) / 3;
};

let scoreDolphin = calcAverage(44, 23, 71);
console.log(scoreDolphin);
let scoreKoala = calcAverage(65, 54, 49);
console.log(scoreKoala);
scoreDolphin = calcAverage(85, 54, 41);
console.log(scoreDolphin);

scoreKoala = calcAverage(23, 34, 27);
console.log(scoreKoala);

const checkWinner = (avgDolphins, avgKoalas) => {
  return avgDolphins > avgKoalas ? `dolphin win ${avgDolphins} vs ${avgKoalas}` : `kolas win ${avgKoalas} vs ${avgDolphins}`;
};

console.log(checkWinner(scoreDolphin, scoreKoala));

// Coding Challenge #6
// Steven wants you to improve his tip calculator, using the same rules as before — tip
// 15% of the bill if the bill value is between 50 and 300, and if the value is different, the
// tip is 20%.
// Your tasks:
// 1. Write a function calcTip that takes any bill value as an input and returns the
// corresponding tip, calculated based on the rules above (you can check out the
// code from the first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100.
// 2. And now let's use arrays! So, create an array called bills containing the test
// data below.
// 3. Create an array called tips containing the tip value for each bill, calculated
// from the function you created before.
// 4. BONUS: Create an array totals containing the total values, so the bill + tip.
// TEST DATA: 125, 555, and 44.
// Hint: Remember that an array needs a value in each position, and that value can actually
// be the returned value of a function! So you can just call a function as array values (so don't
// store the tip values in separate variables first, but right in the new array) 😉
// GOOD LUCK 😀

const calcTip = (bill) => {
  const tip = bill >= 50 && bill <= 300 ? 0.15 : 0.2;
  return bill * tip;
};
console.log(calcTip(100));
const bills = [125, 555, 44];
const tips = bills.map((item) => calcTip(item));
console.log(tips);
const totals = bills.map((item, index) => item + tips[index]);
console.log(totals);

// Coding Challenge #7
// Let's go back to Mark and John comparing their BMIs!
// This time, let's use objects to implement the calculations! Remember: BMI = mass /
// (height * height) (mass in kg and height in meters).
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass,
// and height (Mark Miller and John Smith). Name these objects
// as mark and john, and their properties exactly as fullName, mass and height.
// 2. Create a calcBMI method on each object to calculate the BMI (the same
// method on both objects). Assign the BMI value to a property, and also return it
// from the method.
// 3. Log to the console who has the higher BMI, together with the full name and
// the respective BMI. Example: "John Smith's BMI (28.3) is higher than
// Mark Miller's (23.9)!".
// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m
// tall.
// GOOD LUCK 😀

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
};

const John = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
};
const calcBMI = (mass, height) => {
  return mass / (height * height);
};
let markBMI = calcBMI(mark.mass, mark.height);
console.log(markBMI);

let jhonBMI = calcBMI(John.mass, John.height);
console.log(jhonBMI);

console.log((markBMI > jhonBMI && `${mark.fullName}s BMI (${markBMI}) is higher than Mark Miller's (${jhonBMI})!`) || `${John.fullName}s BMI (${jhonBMI}) is higher than Mark Miller's (${markBMI})!`);

// Coding Challenge #8
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array called bills containing all 10 test bill values.
// 2. Create empty arrays for the tips and the totals (tips and totals)
// 3. Use the calcTip function we wrote before (included in the starter code) to
// calculate tips and total values (bill + tip) for every bill value in
// the bills array. Use a for loop to perform the 10 calculations!
// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.
// BONUS:
// Write a function calcAverage which takes an array called arr as an argument. This
// function calculates the average of all numbers in the given array. This is
// a DIFFICULT challenge! Here is how to solve it if you feel like it:
// 1. First, you will need to add up all values in the array. To do the addition, start by
// creating a variable sum that starts at 0. Then loop over the array using a for
// loop. In each iteration, add the current value to the sum variable. This way, by
// the end of the loop, you have all values added together.
// 2. To calculate the average, divide the sum you calculated before by the length of
// the array (because that's the number of elements).
// 3. Call the function with the totals array.
// GOOD LUCK 😀
let billValues = [22, 295, 176, 440, 37, 105, 10, 1100, 12000];
let tipsArray = [];
let totalArray = [];

for (let i = 0; i < billValues.length; i++) {
  tipsArray.push(calcTip(billValues[i]));
  totalArray.push(tipsArray[i] + billValues[i]);
}
console.log(tipsArray);
console.log(totalArray);

// Coding Challenge #9
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 days
// ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a string
// like the above to the console. Try it with both test datasets.
// Test data:
// • Data 1: [17, 21, 23]
// • Data 2: [12, 5, -5, 0, 4]
// GOOD LUCK 😀

function printForecast(...arr) {
  console.log(arr);

  let forecastString = "... ";
  for (let i = 0; i < arr.length; i++) {
    forecastString += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log(forecastString);
}

const data1 = [17, 21, 23];
printForecast(17, 21, 23);

// =======================================Coding Chellenges Part-3=============================================================//

// Coding Challenge #10
// We are building a football betting App. We get data from a web service about a
// certain game (The data we get from the web service is below, check the game
// variable). In this challenge we're going to work with this data.
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    ["Neuer", "Pavard", "Martinez", "Alaba", "Davies", "Kimmich", "Goretzka", "Coman", "Muller", "Gnarby", "Lewandowski"],
    ["Burki", "Schulz", "Hummels", "Akanji", "Hakimi", "Weigl", "Witsel", "Hazard", "Brandt", "Sancho", "Gotze"],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 1.3,
  },
};

// The Complete JavaScript Course
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2'). In the given data -- players array contains 2 arrays in it.First array
// contains team 1 players and second array contains team 2 players.
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable (gk) with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field
// players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus 'Thiago',
// 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored
// GOOD LUCK 😀

// const players1=game.players[0]
// const players2=game.players[1]

const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

console.log((team1 < team2 && "Team one is win") || "Team two is win");

// Coding Challenge #11
// Let's continue with our football betting app! Keep using the 'game' variable from before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console, along
// with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages; you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// • Odd of victory Bayern Munich: 1.33
// • Odd of draw: 3.25
// • Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for
// "draw"). Hint: Note how the odds and the game objects have the same property names.
// 1. Bonus: Create an object called 'scorers' which contains the names of the players
// who scored as properties, and the number of goals as the value. In this game, it will
// look like this:
// {
// }
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2

for (let i = 0; i < game.scored.length; i++) {
  console.log(`Goal ${i + 1}: ${game.scored[i]}`);
}

let sum = 0;

for (let x in game.odds) {
  sum += game.odds.x;
}

const avg = Object.keys(game.odds).length / sum;
console.log(avg);

console.log(`Odd of victory ${game.team1}: ${team1}`);
console.log(`Odd of draw: ${draw}`);

console.log(`Odd of victory ${game.team2}: ${team2}`);

// Coding Challenge #12
// Write a program that receives a list of variable names written in underscore_case and
// convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to insert the
// elements), and conversion will happen when the button is pressed.
// Test data:
// • underscore_case
// • first_name
// • Some_Variable
// • calculate_AGE
// • delayed_departure w
// Should produce this output:
// • underscoreCase
// • firstName
// • someVariable
// • calculateAge
// • delayedDeparture
// Hints:
// • The solution only needs to work for a variable made out of 2 words, like a_b
// • This challenge is difficult on purpose.
// • Explore different String methods.
// Afterwards, test with your own test data!

const Converter = (value) => {
  const splittedValues = value.split("_");
    if (splittedValues.length > 1) {
    const values = splittedValues[0] + (splittedValues[1].charAt(0).toUpperCase() + splittedValues[1].slice(1));
    console.log(values);
  } else {
    console.log(value);
  }
};
Converter("underscorecase");


// ===========================================Part 4 Coding Challenge =======================================================//


// Coding Challenge #14   
// Let's build a simple poll app!  
// A poll has a question, an array of options from which people can choose, and an array with 
// the number of replies for each option. This data is stored in the starter 'poll' object below.  
// const poll = {  
// question: "What is your favourite programming language?",  
// options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],  
// answers: new Array(4).fill(0),          // This generates [0, 0, 0, 0].  
// }; 
 
// Your tasks:  
// 1. Create a method called registerNewAnswer on the poll object. The method does 2 
// things: 
// • 1.1.  Display a prompt window for the user to input the number of the selected 
// option. The prompt should look like this:  
//                   What is your favourite programming language? 
//                   0: JavaScript  
//                   1: Python  
//                   2: Rust  
//                  3: C++  
//                 (Write option number)  
             
// Create the prompt string using the properties (question & options) from the   
// poll object. 
 
// • 1.2.  Based on the input number, update the 'answers' array property. For 
// example, if the option is 3, increase the value at position 3 of the array by 1. 
// Make sure to check if the input is a number and if the number makes sense 
// (e.g. answer 52 wouldn't make sense, right?)  
// 2. Create a “Answer Poll” button on your webpage. 
// 3. Call registerNewAnswer method whenever the user clicks the "Answer poll" button 
// 4. Create a method displayResults which displays the poll results.  
// 5. Run the displayResults method at the end of each registerNewAnswer method call. 
 
let poll = {  
  question: "What is your favourite programming language?",  
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],  
  answers: new Array(4).fill(0),         
 }; 

 
 poll.registerNewAnswer=function(){
  const input=Number(prompt(`${this.question} \n ${this.options[0]}\n ${this.options[1]}\n ${this.options[2]}\n ${this.options[3]}\n `))
  if(isNaN(input)||input<0||input>3){
   return alert("Invalid input")}
    else{
      this.answers[input]=this.answers[input]+1
     console.log(this.answers);
     
      
    }
      
 }

poll.registerNewAnswer()