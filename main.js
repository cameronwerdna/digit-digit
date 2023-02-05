function squareDigits(num){
  let numArr = String(num).split('')
  let result = []
  numArr.map(item => result.push(item * item))
  
  return Number(result.join(''))
}


console.log(squareDigits(23)) // -> 49
console.log(squareDigits(9119)) // -> 811181
console.log(squareDigits(498)) // -> 168164