// 27 October 2022

// Runtime: 91 ms
// Memory: 42.9 mb

strs1 = ["flower", "flow", "flight"] // expected output: "fl"
strs2 = ["dog", "racecar", "car"] // expected output: ""

let longestCommonPrefix = function (strs) {
    if (!strs.length) return "";

    for (let i = 0; i <= strs[0].length; i++) {
        if (!strs.every((string) => string[i] === strs[0][i])) {
            return strs[0].slice(0, i);
        }
    }

    return strs[0]
};

console.log(longestCommonPrefix(strs1))
console.log(longestCommonPrefix(strs2))