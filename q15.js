function myFunction(num1) {
  if(true) {
    return -10
  }

  return num1 * 10
}

const result = myFunction(5)
console.log(result)

//myFunction has one argument, num1.
//if(true) the function returns -10, or if not true the return is num1 * 10
//a variable result is declared and initialised with myFunction(5)
//expecting result = -10

//as expected