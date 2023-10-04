'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};


const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// console.log(Object.keys(openingHours))
// for (const data of Object.keys(openingHours)) {
//   console.log(data);
// }
// console.log(Object.values(openingHours))
// for (const data of Object.values(openingHours)) {
//   console.log(data);
// }
// console.log(Object.entries(openingHours))
// for (const [key, { open, close }] of Object.entries(openingHours)) {
//   console.log(`On ${key} shop open at ${open} and close at ${close}`);
// }
// destructuring array take array element value;
// const array = [1, 2, 3, 4];
// let a=array[0];
// let b=array[1];
// let c=array[2];
// let d=array[3];
// console.log(a,b,c,d)

// by destructuring 
// let [a, b = 10, c, d] = array;
// console.log(a, b, c, d);

// [c, b = 10, a] = [a, , c];

// array[0] = 20;
// console.log(a,b,c)

// const { openingHours:{thu:{open,close}}} = restaurant;
// console.log(open,close)
// const a="";
// console.log(a="2")


// spread operator 
// const arr = [6, 7, 8];
// const newArr = [0, 1, 2, ...arr]
// console.log(newArr)
// console.log(...newArr)
// const obj1 = {
//   name: "subhan",
//   lname: "khan"
// }
// const newObj2 = { ...obj1 }
// obj1.name = "taiyeb"
// console.log(newObj2)

// const [one, ...other] = [1, 2, 3, ...arr];
// console.log(one, other)

// const array = [1, 2, 3]
// function sum(str, two, ...restNumber) {
//   console.log(str, two, restNumber)
// }
// sum("subhan", ...array, 71, 72)

// any type and type return 
// const result = 0 || false || true;
// console.log(result)
// any type and type return
// const result = true && 1 && false
// console.log(0 || false || true);

// false && sum(1, 2, 3)

// nullish coalescing operator 
// nullish value null undefined are false and all are true

// console.log(0 ?? false ?? true);

// const array = ["subhan", "taiyeb", "abdul", "iram", "heena"]
// for (const value of array) {
//   console.log(value)
// }
// for (const [index, value] of array.entries()) {
//   console.log(index +':'+value)
// }
// console.log([...array.entries()])


// const properties = Object.keys(restaurant.openingHours);
// console.log(properties)
// for (const day of Object.keys(properties)) {
//   console.log(day)
// }


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 2,
    x: 2,
    team2: 2,
  },
};

// for(const [index,value] of game.scored.entries()){
//   console.log(index,value)
// }

// let sum=0;
// for (let num of Object.values(game.odds)) {
//   sum+=num;
//   console.log(num)
// }
// console.log(sum/3)


// const myset = new Set([1, 2, 3, 1, 4, 2])
// console.log(typeof myset)

// console.log(22 - 2 > 18 && 22 - 30 > 2)

// const str = "TEST";
// console.log(str[0])
// console.log(str[1])
// console.log(str[2])
// console.log(str[3])
// console.log(str.length)
// console.log(str.slice(1, 3))
// console.log(str.slice(-3))
// console.log(str.slice(0, -2))
// console.log(str.replaceAll("T", "@"))


// function capilization(yourName) {
//   let strArr = yourName.split(" ");
//   let arr=[];
//   console.log(strArr)
//   for (const n of strArr) {
//     arr.push(n[0].toUpperCase() + n.slice(1))
//   }
//   console.log(arr.join(" "))
// }
// capilization("md subhan khan.")


// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
const [players1, players2] = game.players;
// console.log(players1, players2);

const {odds:{team1,x:drow,team2}} = game
console.log(team1,drow,team2)
