// const name = "Zoel Khadka"
// name = "Zoel Khadka" // WE CANNOT REASSIGN THE VARIABLE BUT..

// const names =['Zoel Khadka', 'Krishna Khadka'];
// names[2]= 'Simon Khadka' // WE CAN REASSIGN THE CONST IF IT HOLDS AN ARRAY OR OBJECT 
// console.log(names);
// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday']
// // console.log(days[1]);
// days [3] = 'Wednesday' // WE CAN ADD ITEMS FROM LAST BY USING THIS METHOD OR ANOTHER 'PUSH' METHOD 
// console.log(days);
// days.push('Wednesday'); // WE USE PUSH TO ADD ITEM
// console.log(days);

// days.pop() // POP MEANS TO REMOVE THE LAST ITEMS FROM ARRAY
// console.log(days); 
// days.unshift('Saturday'); // WE USE 'UNSHIFT' TO ADD ITEMS FROM FIRST.
// console.log(days);

// days.shift()
// console.log(days);
// console.log(days.length);

// const numbers = [1,2,3,4,5]

//SLICE IS USED TO COPY A PORTION OF THE ARRAY. IT DOES NOT MODIFY THE ORIGINAL ARRAY.

// const newSliceArray = numbers.slice(1,4)
// // slice(startIndex, endIndex) ---> where startIndex is inclusive but endIndex is exclusive.
// console.log(newSliceArray);

//splice ---> is used to change the content of an array by removing or replacing existing and/or adding new elements.
 // splice(startIndex, deleteCount, item)

//  let newSpliceArray = numbers.splice (3,2)

//  let splicedNumbers = numbers.splice (3, 2, 44, 55)
// //  console.log(splicedNumbers);
// console.log(numbers);

// split ---> split can  change any string into an array if we give it conditional denoter. 
// let text = 'I am learning JavaScript'
// const newArray = text.split(" ")
// console.log(newArray); 

// const person =  {
//     name : "Zoel Khadka" ,
//     address : "2197 Pineywoods st, Mead, CO 80542"
// }

// console.log(Object.keys(person));
// console.log(Object.values(person));

// // person.age = 22
// person.name = "haha" 

// // new coder can easily manipulate or modify the object which can create the problems.

// console.log(person); 


//WE CAN ADD OR MANIPULATE THE VALUES OF OBJECT WHICH CREATES THE PROBLEMS, BUT... WE HAVE ONE 'freeze' to stop manipulate the object.

// const person =  {
//     name : "Zoel Khadka" ,
//     address : "2197 Pineywoods st, Mead, CO 80542"
// }
// Object.freeze(person) 
// // person.name = "heheh"
// // person.age = 33
// //NO ONE CAN MODIFY OR MANIPULATE THE OBJECT NOW.

// console.log(person);

// CONDITIONAL in Javascipt 
// const isRaining = false
// if(isRaining){
//     console.log("Carry Umbrella")
// }
// else{
//     console.log("Don't carry Umbrella")
// }

// const temperature = 98
// if(temperature > 98){
// console.log("It is hot outside")
// } else if (temperature > 93 && temperature <= 98) {
//     console.log("It is pleasant outside")
//      } else {
//         console.log("It is cold outside")
//     }

//Ternary Operator
// const isNepalese = true
// const result = isNepalese? "Say Namaste": "Say Hello" 
// console.log(result);
//WE CAN SHORTNED THE CODE BY USING TERNARY OPERATOR LIKE THIS. WE MOSTLY USED THIS OPERATOR IN 'IF' AND 'ELSE' CASE BUT IN OTHER, IT WILL BE NOT READABLE.

//Short Circuit Evaluation
// const isNepalese = false
// const result = isNepalese && "Say Namaste" || "Say Hello"
// console.log(result);

let isLoggedIn = true
const name = isLoggedIn && "Authenticated" 
// console.log(name);

// Nullish Coelescing Operator
// let age = null
// let result = age ?? "No age"
// console.log(result);

// let age = undefined
// let result = age ?? "No age"
// console.log(result);

//Both 'null' and 'undefined' shows 'No age' but if there is age like 31, 41 then it shows its age. This is shortned way

// let age = null
// if(age === null || age === undefined) {
//     age = "No age"
// }
// console.log(age); 
//But this is long code we prefer other way and it is called Coelescing.

let age = null 
// let age = undefined
let result = age ?? "No age"
console.log(result);
