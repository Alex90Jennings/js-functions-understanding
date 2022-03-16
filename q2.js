function myFunction(num1, num2) {
  num1+num2
}

const result = myFunction(5,5)
console.log(result)

//myFunction has 2 arguments that are added together within the function.
//However there is no variable to assign the value of the addition.
//So I expect the function will not return anything, console.log(result) = undefined

//as predicted console.log(result) = undefined