// Higher Order Functions take funcs as args or return funcs

function map(arr, fn)
{
  const newArr = []

  //forEach itself is also a higher order function
  arr.forEach(function(val)
  {
    newArr.push(fn(val))
  })

  /* Reduced this code with the above
  for (let i =0; i<arr.length; i++)
  {
    let val = arr[i]
    newArr.push(fn(val))
  }
  */

  return newArr
}

function addOne(num) { return num +1 }

const x = [0,1,2,3]

console.log(map(x,addOne))

/**** returns [ 1, 2, 3, 4 ] *****/






function filter(arr, fn) {
  const newArr = []
  arr.forEach(val => {
    if (fn(val)) newArr.push(val)
  })

  return newArr
}
  /* equivlent of the above for each loop is arr.forEach( function (val) { .... }) */


console.log(filter(x,addOne))


function reduce(arr, fn, initialVal) {
  let returnVal = initialVal

  arr.forEach(val => {
    returnVal = fn(returnVal, val)
  })

  return returnVal
}
