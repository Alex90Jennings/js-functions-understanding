function myFunction(num1, num2) {
  const result = num1+num2
  console.log(result)
  return result
}

const result = myFunction(10, 20)
myFunction(100, 2)


//myFunction is a function with two agruments, num1 and num2
//a variable, result, is declared and initialised with num1 + num2
//result is returned
//a variable, result, is declared and initialised with myFunction(10,20)
//myFunction is called with parameters 100 and 2
//expected results 1- 30, 2- 102

//as expected