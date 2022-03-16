function myFunction(num) {
  return num-1
}

let num = 10
console.log(num)
num = myFunction(num)
console.log(num)
num = myFunction(num)
console.log(num)

//the function myFunction has one argument, num. The function returns the num - 1.
//after the function, the num is declared and initialised to 10
//the num is then initialised as myFunction(num) twice
//I expect that num will equal 10,9,8. as it is reduced by 1 each time it is fed into the function.

//the function returned as expected.

