
// // function declaration has hoisting 
// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges)
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
//     console.log("lp")
// }
// fruitProcessor(2,2);

// function expression has not hoisting 
// subhan has all function value 
// const subhan = function(apples, oranges) {
//     console.log(apples, oranges)
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    // return juice;
// }
// subhan(0,0);
// console.log(typeof subhan)
// console.log(typeof subhan())


function sum(){
   return "hi";
}
console.log(array=[1,"subhan",[1,2,3],{name:"subhan",id:1},null,undefined,sum()])