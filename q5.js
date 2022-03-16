function myFunction(num, num1) {
    console.log(num1)
}

let num = 10
let num1 = 2

myFunction(num)

//myFunction has 2 arguments, num and num1, and only returns a console.log of num1
//num and num1 are declared and initialised as 10 and 2
//myFunction is run with only one input, num, which has a value of 10
//I expect console.log(num1) to equal undefined as the myFunction(num) only has 1 input

//as expected