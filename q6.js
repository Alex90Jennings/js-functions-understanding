function myFunction(num, num1) {
  console.log("1 within function num:" + num)
  console.log("2 within function num1:" + num1)
}

let num = 10
let num1 = 2
console.log("3 outside function num:" + num)
console.log("4 outside function num:" + num1)


myFunction(num1, num)

//myFunction has 2 arguments, num and num1, and only returns a console.log of num1
//num and num1 are declared and initialised as 10 and 2
//myFunction is called with two inputs, num1 and num, but in the opposite order of the original function
//I expect console.log(num1) to equal 10

//as expected