// Functions
//  Do 1+1, AND WE DO 
// console.log(1+1)
// AGAIN, THEY SAY DO 1+2 
// AND WE DO 
// console.log(1+2)
// DID YOU WE REPEAT THE CODES THATS NOT GOOD CODING. THEREFORE WE NEED 'FUNCTION' TO DEAL WITH IT
// Function are reusable block of code written to overcome repetition and more. It is also used to manage the code properly.
// The main purpose of function is to transfer data from one file to another. 

// There are 4 types of Functions 
// 1. Regular Function
// 2. Named Function
// 3. Arrow Function 
// 4. Anonymous Function 

// console.log(1+1);
// console.log(1+2);
// console.log(1+3); 

// WE DO NOT REPEAT THE SAME CODE AGAIN ANA AGIAN SO WE USE 'FUNCTION'.

// function add(){
//     console.log(1+2)
// }
// add() 
// // This is envoking or calling function to execute. But again to do other function we have to do...
// function add2(){
//     console.log(2+3)
// }
// add2()
// BUT WE DO NOT DO LIKE THIS.. FOR BETTERMENT WE USE 'PARAMETER' AND 'ARGUEMENT' FOR DYNAMIC 

//1. Regular function
// function add(a,b){
//     console.log(a+b)
// }
// add(1,2);

// function add(a,b,c=99){
//     console.log(a+b+c)
// }
// add(1,2);

//WE CAN SET DEFAULT VALUE IN PARAMETER LIKE c=99,

// function add(a,b,c=99){
//     console.log(a+b+c)
// }
// add(1,3,7);
// IF WE GIVE THE ARGUEMENT THEN IT WON'T EXECUTE THE DEFAULT VALUE OF c=99, IT USES ITS OWN VALUE.

//named function
// let add = function (a,b,c){
//     console.log(a+b+c)
// }
// add(2,5,7);

//named arrow function (2015, ECMA6 SCRIPT)

// let add = (a,b,c) => console.log (a+b+c);

//WE CAN USE ANY ARROW FUNCTION BUT SHORT AND CLEAN IS THIS ONE
// let add = (a,b,c) => {
//      console.log(a+b+c)
//      console.log("Hello")
//     }
//   add(1,3,5)   

//Anonymous function

//  ( () => {
//     console.log("I am Anonymous")
//   }) ()
  
  // IN REACT WE HAVE TO MAKE A SUCH FUNCTION 
  
//   const annonymous = () => {
//      console.log("I am Anonymous")
//   }
//   annonymous (); // It is named arrow function.

//   const squareRoot = (a) =>  {
//     console.log(a*a)
//   }
// squareRoot (7)

// WE CAN USE 'return' also to store the variable. For example...
// const squareRoot = (a) => {
//     return a*a
// }
// const squareRoot = (a) => a*a
// const result = squareRoot (5)
// console.log(result);

// LOOPS in Javascript
//  const friends = ['Bhuwan', 'Hanok', 'James', 'Peter', 'Issac', 'Roman', 'Bardan', 'Laxman']
 //  console.log(friends[1]);
 //  console.log(friends[2]);
 //  console.log(friends[0]);
 //  console.log(friends[7]);
 
 // IF THERE IS MULTIPLE VALUES OVER THERE WE HAVE TO REPEAT THE CODE SO TO SOLVE THIS PROBLEMS WE HAVE 'LOOP' IN JS.
 
 // for(intialization, condition, iteration)
 
 //  for (let i=1; i<20 ; i++) {
    //     console.log(i)
    //  }
    
    // i++ === i = i+1 SO WE CAN WRITE LIKE THIS TOO..
    //  for (let i=1; i<20 ; i=i+1) {
        //     console.log(i)
        //  }
        
        // for (let i=1; i<11; i=i+2) {
            //     console.log(i)
            // }
            
            // for (let i=2;i<101; i=i+2) {
                //     console.log(i)
                // }
                
                // for(let i=0; i<21; i++) {
                    //     console.log(i)
                    // }
                    
                    // for (let i = 0; i<4; i++){
                        //     console.log(friends[i])
                        // }
                        // IF THERE ARE MANY VALUES ON ARRAY THEN IT IS DIFFICULT TO COUNT DOWN ONE BY ONE SO WE USE '.length' to condition.
                        
                        // console.log(friends.length);
                        
                        // for (let i = 0; i<friends.length; i++) {
                            //     console.log(friends[i])
                            // }
                            
                            //WHILE LOOP
                           
const friends = ['Bhuwan', 'Hanok', 'James', 'Peter', 'Issac', 'Roman', 'Bardan', 'Laxman']
// let i = 0;
// while(i<friends.length){
// console.log(friends[i])
//     i++
// }

// WE ALSO HAVE ANOTHER ESAY METHOD ONLY FOR ARRAY & STRING NOT FOR OBJECT ...

// for (names of friends) {
//     console.log(names)
// }

// const person = {
//     name : 'Zoel Khadka',
//     address: '2197 Pineywoods st, Mead, CO 80542'
// }
// for(let key in person){
//     console.log(key, person[key])
// }   

// console.log(name);
// // let name = "Asmi khadka"
// var name = "Asmi Khadka" 
// // 'var' and regular function are hoisted but not 'let' and named function (var add = function (){})

// add()
// function add(){
//     console.log(1+2)

// }

// add()
// let add = () => {
//     console.log(2+3)
// }
// var add  = function () {
//     console.log(1+2)
// }

function example (){
    console.log(y)
    var y = 99
}
example () 
