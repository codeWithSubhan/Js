// console.log(3<2<1)
// console.log(`String
// multiple
// 👀
//   hi

//               lines `);

// There are two types of type conversion in JavaScript.
// Implicit Conversion - automatic type conversion //coercion
// Explicit Conversion - manual type conversion    //conversion

// The type conversion only used in three data types which are 
// String
// number
// boolean


// Explicity part 
///////////////////////////

// 1) To string conversion from anything like number boolean null undefined NaN
// let test = 1991
// test = true
// console.log(String(test),test)

// 2) To convert only numerical text and ""," " and boolean values to numbers.
// let test = '1991'

// ===1===
// test = true

// ===0===
// test = false 
// test = ""," "
// test = null

// ===NaN===
// test = 'subhan'
// test = undefined
// test = NaN;
// console.log(Number(test),test)
// if(test==0){
//     console.log("true")
// }else{
//     console.log("false")
// }

// 3) If we pass the values like empty string(‘’), null, undefined, and NaN then the result will always be false.
// let test = '1991'
// test = 'subhan'
// test = 1
// test = " "

// test = 0
// test = ''
// test = null
// test = undefined
// test = NaN;
// console.log(Boolean(test),test)
// if(test){
//     console.log("true")
// }else{
//     console.log("false")
// }


// Explicity part 
///////////////////////////
// let test="";
// function good(){
//     console.log("khan");
// }
// if ('-3' !== -3) {
//     console.log("rigth");
// } else {
//     console.log("wrong");
// }

// The switch Statement
// const day = 'monday';

// switch (day) {
//     case 'monday': // day === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//     // break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//     // break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log('Not a valid day!');
// }

