const minus1 = document.getElementById('decrement-1')
const minus5 = document.getElementById('decrement-5')
const reset = document.getElementById('R')
const add1 = document.getElementById('increment+1')
const add5 = document.getElementById('increment+5')

let int = document.getElementById('result')
let integer = 0

minus1.addEventListener('click', function () {
  integer -= 1
  int.innerHTML = integer
})

minus5.addEventListener('click', function () {
  integer -= 5
  int.innerHTML = integer
})

reset.addEventListener('click', function () {
  integer = 0
  int.innerHTML = integer
})

add1.addEventListener('click', function () {
  integer += 1
  int.innerHTML = integer
})

add5.addEventListener('click', function () {
  integer += 5
  int.innerHTML = integer
})

console.log()
