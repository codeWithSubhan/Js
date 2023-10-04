'use strict';

// let firstGlobal = "firstGlobal variable"
// function global() {
//     let global = "global variable";
//     console.log(firstGlobal);

//     function local() {
//         let local = "local variable";
//         console.log(global);
//         // secondGlobal();
//         if (true) {
//             function blockScop() {
//                 console.log(2 + "2" - 2)
//             }
//         }
//         // blockScop();
//     }

//     local();
// }
// global();
// local();
// function secondGlobal() {
//     let secondGloabl = "secondGlobal variable"
//     console.log(secondGloabl, global, local, firstGlobal);
// }


// hoisting 
// var host;
// console.log(host);
// host = 2;
// console.log(host === window.host)

// function varVariable() {
//     var sum = 0;
//     let plus = 0;
//     if (true) {
//         var sum = 1;
//         let plus = 1;
//     }
//     console.log(sum)
//     console.log(plus)
// }
// varVariable();


// console.log(this)
// function sum() {
//     console.log("not working with use strict mode")
//     console.log(this)
// }
// sum();
// function outer(){
//  let num="20";
//     var sum = () => {
//         console.log("not working with use strict mode")
//         console.log(this)
//     }
//     sum();
// }
// outer();

// const obje = {
//     name: "subhan",
//     greet:()=> console.log(this),
//     sum: function () {
//         // console.log(this)
//         function regur() {
//             console.log("method of obje")
//             console.log(this)
//         }
//         regur();

//         var arr = () => {
//             console.log("obje method function ")
//             console.log(this)
//         }
//         arr();
//     }
// }
// obje.sum();
// obje.greet();



// swipp variable with destructuring
// let first = 1;
// let second = 2;
// [first,second]=[second,first];
// console.log(`first:${first}  second:${second}`)

// const obje = {
//     first: [1, 2, 3, 4],
//     second: [5, 6, 7, 8],
//     order: function (firstIndex, secondIndex) {
//         return [this.first[firstIndex], this.second[secondIndex]];
//     }
// }
// const [first, second] = obje.order(1, 1);
// console.log(first, second)


