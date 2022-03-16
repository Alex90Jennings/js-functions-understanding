function myFunction(num1, num2) {
  console.log(num3)
}

const num1 = 10
const num2 = 1
const num3 = 20

myFunction(num3, num1)

//myFunction has 2 arguments, num1 and num2, and console.logs(num3)
//3 variables are declared and initialised num1, num2, num3 with values 10, 1, 20
//function is called with num3 and num1 as inputs
//as num3 is not one of the inputs, the function will look to the global scope for num3 and console.log 20

//as expected