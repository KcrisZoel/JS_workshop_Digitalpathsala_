// HOF --> HIGHER ORDER FUNCTION LIKE '.filter', '.forEach', 'map', 'reduce'.
// Higher Function are those functions which accept one or more functions(callback) or return a function.
// CALLBACK FUNCTION --> This is function which passed as an agrument.


// function sayHello (name){
//     console.log(name)
// }
// sayHello("Asmi")

// function sayHello(name, callback){
//     console.log(name)
//     callback()
// }
// function sayGoodbye(){
//     console.log("Good Bye")
// }

// sayHello("Zoel", sayGoodbye)

const fruits =['Apple', 'Banana', 'Cherry', 'Date']

// HOF --> .forEach --> .forEach is best function to execute result in regular array. 

// fruits.forEach(function(fruit){
// console.log(fruit)
// })

// const numbers = [1, 2, 3, 4, 5]
// const squaredNumbers = []

// numbers.forEach(function(number){
//     squaredNumbers.push(number ** 2)
// })
// console.log(squaredNumbers)

// const squareNumbers= numbers.map(function(number){
// return number ** 2
// })
// console.log(squareNumbers)

const users = [
    {
        id : 1, 
        firstName : 'Asmi',
        lastName : 'Adhikari',
        address : 'Jhapa'
    },

    {
        id : 2,
        firstName : 'Zoel',
        lastName : 'Khadka',
        address : 'Pokhara'
    },

    {
        id : 3,
        firstName : 'Melchizedek',
        lastName : 'Maiser',
        address : 'Colorado'
    },

    {
        id : 4,
        firstName : 'Mahliazedek',
        lastName : 'Maisah',
        address : 'America'
    }
]

// users.forEach ((user)=> {
//     console.log(users.firstName + users.lastName)
// })
// '.forEach' LOOP IS BEST USED TO SHOW THE DATA ON THAT ARRAY BUT TO MODIFY AND MANIPULATE BETTER TO USE 'map' METHOD.

const result= users.map((user)=> {
    // console.log(users) // IT WILL SAME AS ABOVE 
    return {
        // name: 'HeHeHe' // MANIPULATING
        // id: user.id,
        // firstName: user.firstName,
        // lastName: user.lastName,
        // address: user.address,

        // fullName: user.firstName + user.lastName 
        // SINCE WE ONLY NEED THIS FULL NAME, WHY WE NEED TO WRITE AGAIN ABOVE SAME CODE.THEREFORE WE USE 'spread' OPERATOR. i.e --> '...users'
        ...user,
        fullName: user.firstName + user.lastName 
    }
})
// console.log(result)
// console.log(users) // THERE IS ANY MODIFICATION HERE.

// const number2 = [1, 2, 3, 4]
// const output = number2.map ((digit)=> {
//     return { 
//         number : digit,
//         name : 'A'
//     }
// })
// console.log(output)

// FILTER HOF --> to filter data from the array or objects.  syntax --> '.filter' 

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const evenNumbers= numbers3.filter(function (number){
//     return number % 2 === 0 // IN FILTER ONLY BULLIAN ARE WRITTEN IN ONE LINE CODE. WE CAN NOT WRITE OBJECT HERE.
// })

// const oddNumbers = numbers3.filter((number) => {
//     return number % 2 !==0 
// })
// console.log(oddNumbers)

// const holyBooks = [
//     {
//         Title : "Bible",
//         Religion : "Christianity",
//         Year : 3400 
//     },
//     {
//         Title : "Quran",
//         Religion : "Islam",
//         Year : 1400 
//     },
//     {
//         Title : "Vedas",
//         Religion : "Hinduism",
//         Year : 2500 
//     },
//     {
//         Title : "Guru Granth Sahib",
//         Religion : "Sikhism",
//         Year : 420 
//     },
//     {
//         Title : "Tripitaka",
//         Religion : "Budhhism",
//         Year : 2100 
//     },
//     {
//         Title : "Avesta",
//         Religion : "Zoroastrianism",
//         Year : 2600 
//     },
//     {
//         Title : "Tanakh",
//         Religion : "Judaism",
//         Year : 3200 
//     }
// ]

// const output = holyBooks.filter(function(name){
//     return name.Title == "Bible" // WE CAN === TO GET PRECISELY 
// })

// console.log(output);

// const output = holyBooks.filter(function (books){
//     return books.Year > 2000
// })
// console.log(output)

// const files = ["app.js", "index.html", "script.js", "style.css", "apple.c"]

// const jsFiles = files.filter(function(file){
//     return file.endsWith(".js")
// })
// console.log(jsFiles)

// const data = [ 0, null, 25, 500, undefined, true , "Asmi", -1, null ]

// const output = data.filter((item) => {
//     return item !== null && item !== undefined && item !== -1
// })
// console.log(output);

// 'REDUCE' --> HOF 

const numbers = [1, 2, 3, 4, 5]
const result2 = numbers.reduce(function(accumulator, currentValue){
    return accumulator + currentValue
    },0)
// console.log(result2)

const cartItems = [
    {
        name : "Product A",
        quantity : 1,
        price : 5
    },
    {
        name : "Product B",
        quantity : 25,
        price : 4
    },
    {
        name : "Product C",
        quantity : 50,
        price : 20
    },
    {
        name : "Product D",
        quantity : 10,
        price : 2
    },

]
// FIND TOTAL QUANTITY AND TOTAL PRICE OF ALL ITEMS.

// const output = cartItems.reduce(function (accumulator, currentProduct){
// // accumulator.totalPrice = accumulator.totalPrice + (currentProduct.quantity * currentProduct.price)
// // accumulator.totalQuantity = (accumulator.totalQuantity + currentProduct.quantity) // WE CAN OPTIMIZE THIS CODE INTO THIS...

//    accumulator.totalPrice += currentProduct.quantity * currentProduct.price
//    accumulator.totalQuantity += currentProduct.quantity

// return accumulator

// }, {totalPrice : 0, totalQuantity : 0})

// console.log(output)

const people = [
    {
        name : "Asmi", age : 32
    },
    {
        name : "Mahliazedek", age : 16
    },
    {
        name : "Melchizedek", age : 21
    },
    {
        name : "Zoel", age : 32

    }
]
const groupedData = people.reduce(function(accumulator, person){
const age = person.age 
if(!accumulator [age]) {
    accumulator [age] = []
}
{
    accumulator[age].push(person)
    return accumulator
}
     },{})
     console.log(groupedData);