function myFunction(num1, num2, num3) {
  return num1 + num3
}

const num1 = 20
const num2 = 200
const num3 = 1000

const result = myFunction(5, 10, num3, 15)
console.log(result)

//myFunction is a function with three agruments, num1, num2 and num3, which returns num1 + num3
//three variables are declared and initialised, num1, num2 and num3 with value 20, 200, 1000
//a variable, result, is initialised with a call of myFunction(5,10,num3,15)
//expected result 1005

//as expected