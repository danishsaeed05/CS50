function printOne() {
  console.log('one')
}


function printTwo() {
  console.log('two')
}


function printThree() {
  console.log('three')
}

printOne()
printTwo()
printThree()
/* Output = one two three */

setTimeout(printOne, 1000)
setTimeout(printTwo, 0)
printThree()

/* Output = three two one */
