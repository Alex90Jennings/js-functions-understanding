function myFunction(num1) {
  if(false) {
    return -100
  }

  return num1 * 10
}

const result = myFunction(5)
console.log(result)

//myFunction has one argument, num1.
//if(false) the function returns -10, or if not false the return is num1 * 10
//a variable result is declared and initialised with myFunction(5)
//expecting result = 50

//as expected