function myFunction(num) {
  return num-1
}

let num = 10
let add = 3
console.log(add)
add = myFunction(add)
console.log(add)
add = myFunction(add)
console.log(add)

//the function myFunction has one argument, num, and returns num - 1
//num is declared and initialised as 10.
//add is declared and initialised as 3.
//add is then initialised as myFunction(add), as add has been assigned the value 3, the num in myFunction is given the value 3.
//add is then initialised as myFunction(add), as add has now been assigned the value 2, the num in myFunction is given the value 2.
//I expect the add to equal 3, 2, 1.

//as expected