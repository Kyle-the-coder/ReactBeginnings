var fizzBuzz = function (n, arr=[]) {
    
    if (n % 3 === 0 && n % 5 === 0) {
        arr.push("FizzBuzz")
    } else if (n % 3 === 0) {
        arr.push("Fizz")
    } else if (n % 5 === 0) {
        arr.push("Buzz")
    } else {
        arr.push(n.toString())
    }

    if (1 >= n) {
        arr = arr.reverse()
        return arr
    } else {
        n=n-1
        return fizzBuzz(n, arr)
    }

};

let n = 5
console.log(fizzBuzz(n))