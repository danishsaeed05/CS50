/****************************** JUST FOR PRACTICE ******************************************/

//This will work. It is hoisting. var and function defitions are hoisted.
//Meaning they are brought to the top when it is compiled or when you run it 

thisIsHoisted() //This will work since function definitions are moved to the top of the file(hoisting)


console.log(thisIsAVar) //will give undefined
const thisIsAconst = 50

//thisIsAconst++ //error!


const constObj = {}

constObj.a = 'a'

let thisIsALet = 51
thisIsALet = 50

//let thisIsALet = 51 //errors!


/* This will work because var will actually declare a whole new variable */
var thisIsAVar = 50
thisIsAVar = 51
//known as shadowing. As if the previous one didn't exist
var thisIsAVar = 'new value!'

console.log(thisIsAVar)


func thisIsHoisted()
{
	console.log('this is a function declared at the bottom of the file')
}
/****************************** JUST FOR PRACTICE ******************************************/






/****************************** Practical Tested ******************************************/
// "var" is lexically scoped, meaning it exists from time of declaration to end of func
if (true) {
  var lexicallyScoped = 'This exists until the end of the function'
}

console.log(lexicallyScoped)

// "let" and "const" are block scoped
if (true) {
  let blockScoped = 'This exists until the next }'
  const alsoBlockScoped = 'As does this'
}

// this variable doesn't exist
console.log(typeof blockScoped)

thisIsAlsoAVariable = "hello"

const thisIsAConst = 50

// thisIsAConst++ // error!

const constObj = {}

// consts are still mutable
constObj.a = 'a'

let thisIsALet = 51
thisIsALet = 50

// let thisIsALet = 51 // errors!

var thisIsAVar = 50
// thisIsAVar = 51
// var thisIsAVar = 'new value!'
