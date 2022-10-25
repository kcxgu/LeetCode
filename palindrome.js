// 24 October 2022

let x = -121;
let w = 10;
let v = 121

// Without converting to string
// Runtime: 160 ms
// Memory: 49.8 mb

var isPalindrome = function (x) {
    if (x < 0) return false

    let rev = 0
    for (let i = x; i >= 1; i = Math.floor(i / 10)) {
        // a loop whereby each time, the given number is divided by 10 and rounded.
        // e.g. 121 / 12 / 1
        rev = rev * 10 + i % 10 // concatenation, not addition
        // when it's 121, rev = 1
        // when it's 12, rev = 12
        // when it's 1, rev = 121
    }
    return rev === x
};

// With string
// Runtime: 314 ms
// Memory: 50.7 mb

// var isPalindrome = function (x) {
//     let y = Array.from(String(x))
//     let z = Array.from(String(x)).reverse()
//     if (y.toString() === z.toString()) {
//         return true
//     } else {
//         return false
//     }
// };


console.log(isPalindrome(x))
console.log(isPalindrome(w))
console.log(isPalindrome(v))