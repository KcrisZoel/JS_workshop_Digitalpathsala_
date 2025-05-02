// // var cup = "Coffee"
// // let cup = "Coffee"

// // In var and let we can reassigment but can't in const 

// const cup = "Coffee"
// // var is global and functional scope but let and const are block level scope

// // var secret = "hehehheh"

// // secret = "hohoho"
// // console.log(secret);

// // we can reassign variable in var and let but not in const

// const secret = "hahahha"
// // secret = "huhuhuh"
// console.log(secret);

// if (true){
//     let name = "John Doe"
//     console.log(name, "This is first one")
// };

// console.log(name, "This is second one");

// const age = 31;
// const isNepali = false;

// let name = "Zoel"
// console.log(name+ " Khadka");
// console.log(name+ 31);

// let friend1 = "Bhuwan"
// let friend2 = "Hanok"
// let friend3 = "James" //This type of coding consumes time so we came up with ARRAY;

// let friends = ['Bhuwan', 'Hanok', 'James', 70, true ]; //we can put anything in the array

// let friends = ['Bhuwan', 'Hanok', 'James'];
// // console.log(friends);
// let friends = ['Bhuwan', 'Hanok', 'James'];
// console.log(friends[1]); // We use index to get needed value.

// let khoyo = ['DigitalPathsaala', 999 ] //Array also has drawback that it does not tell the information clearly.
let khoyo = {
    instituteName : "Digital Pathsaala",
    reactCoursePrice: 999 
}
// Object clearly shows key and value i.e. key:value ,---> instituteName is Key and Digital Pathasaala is value.
// console.log(khoyo.reactCoursePrice);

console.log(khoyo ['reactCoursePrice']); // We rarely use this syntax 