function getSomeValue() {
  return 2
}

function myFunction(num1) {
  const num2 = getSomeValue()
  return num1 * num2
}

const result = myFunction(5)
console.log(result)


//getSomeValue is a function with no input that returns 2
//myFunction is a function with one argument, num1, that declares a variable num2 with the value from getSomeValue
//myFunction returns the mutliplication of num1 and num2
//a variable result is declared and initialised as call of myFunction(5)
//expect result to be 10

//as expected