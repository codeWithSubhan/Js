'use strict';


// // callback function later
// function normalize(str) {                //callback function and high level abtraction
//     let [firstName, ...other] = str.split(" ");    
//     return [firstName.toUpperCase(), ...other].join(" ");
// }

// function display(str, normalize) {                 //high order or low lever abstraction
//     console.log(`Normalize str: ${normalize(str)}`)
// }
// display("javascript course", normalize); 



// const greet = Greeeting => name => console.log(`${Greeeting} ${name}`);
// greet("Hey")("khan");

// const lufthana = {
//     airline: 'Lufthana',
//     iataCode: 'LH',
//     bookings: [],
//     book(flightNum, name) {
//         console.log(`${name} book a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//         this.bookings.push({
//             flight: `${this.iataCode}${flightNum}`,
//             name,
//         })
//     }
// }
// // lufthana.book(239,'subhan khan');
// // console.log(lufthana)


// // same books function functionality without writing func in obje 
// const indiaAirline = {
//     airline: 'indiaAirline',
//     iataCode: 'IN',
//     bookings: [],
// }

// const book = lufthana.book;

// doesn't work this due to regular func 
// book(99,'taiyeb')

// function method to tell this keyword where to point 
// book.call(indiaAirline, 999, 'taiyeb')

// const usAireline = {
//     airline: 'usAireline',
//     iataCode: 'US',
//     bookings: [],
// }
// const arr = [1947, 'abdul']
// book.apply(usAireline, arr);
// book.call(indiaAirline,[...arr])
// console.log(usAireline)



// const arabAireline = {
//     airline: 'arabAireline',
//     iataCode: 'AR',
//     bookings: [],
// };

// const newFunc = book.bind(arabAireline)
// newFunc(10, "arab");

// const newFunc1 = book.bind(arabAireline, 23)
// newFunc1("subhan")
// newFunc1("taiyeb")
// newFunc1("abdul")


// arabAireline.planes = 0;
// arabAireline.buyPlane = function () {
//     console.log(this)
//     this.planes++;
//     alert(`your buy ${this.planes} planes`)
// }
// document.querySelector('.buy').addEventListener('click',
//     arabAireline.buyPlane.bind(arabAireline)
// )


// function sum(a, b) {
//     console.log(a + b)
// }
// const fun = sum.bind(null, 2);
// fun(1)
// fun(2)

// var a =0;
// (function(){console.log("IIFE",a);var b=0;})();
// console.log(b)

// function parent() {
//     let a = 0;
//     return function close() {
//         console.log(++a)
//     }
// }
// const close = parent();
// close();
// close();
// close();
// console.dir(close)

// let f;

// function sum() {
//     const a = 2;
//     f = function () {
//         console.log(a + 2)
//     }
// }

// function sum2() {
//     const a = 3;
//     f = function () {
//         console.log(a + 2)
//     }
// }
// sum()
// f();

// sum2()
// f();

// because of closer 
// for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//         console.log("\n")
//     }, 3000)
// }

(function () {
    document.querySelector("body").style.Color = "yellow"
    document.querySelector("body").addEventListener("click", () => {
        document.querySelector("body").style.backgroundColor = "red";
    })
})();