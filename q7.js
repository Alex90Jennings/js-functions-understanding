let counter = 1

function myFunction() {
  counter++
  return counter
}

myFunction()
const num = myFunction()
console.log(num)

//counter is declared and initialised with the value 1
//myFunction has no arguments. It increments and returns counter.
//function is called with no input
//expecting num = 2

//returns 3 as the function is called twice, so the counter is incremented twice

