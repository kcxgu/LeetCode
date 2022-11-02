// 1 November 2022

s1 = "()" // true
s2 = "()[]{}" // true
s3 = "(]" // false

// Runtime: 61 ms
// Memory: 41.9 mb

let isValid = function (s) {
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    const split = s.split('');
    const stack = [];

    for (let i = 0; i < split.length; i++) {
        const el = split[i];

        if (el in map) {
            stack.push(map[el]);
        } else {
            if (el === stack[stack.length - 1]) stack.pop();
            else return false;
        }
    }

    return !stack.length > 0;
};

// Runtime: 105 ms
// Memory: 42.9 mb

// let isValid = function (s) {
//     let stack = [];
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] == '{') {
//             stack.push('}');
//         } else if (s[i] == '[') {
//             stack.push(']');
//         } else if (s[i] == '(') {
//             stack.push(')');
//         }
//         else if (stack.pop() !== s[i]) {
//             return false;
//         }
//     }
//     return !stack.length
// };

console.log(isValid(s1))
console.log(isValid(s2))
console.log(isValid(s3))