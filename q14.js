function getSomeValue() {
  return 2
}

function myFunction(num1) {
  return getSomeValue() * getSomeValue()
}

const result = myFunction(5)
console.log(result)

//getSomeValue is a function with no input that returns 2
//myFunction is a function with one argument, num1, that  returns the mutliplication of getSomeValue() and getSomeValue()
//a variable result is declared and initialised as call of myFunction(5)
//expect result to be 4