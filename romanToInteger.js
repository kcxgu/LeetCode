// 25 October 2022

// Runtime: 140 ms;
// Memory: 46.2 mb

s1 = "III" // expected output: 3
s2 = "LVIII" // expected output: 58
s3 = "MCMXCIV" // expected output: 1994

let romanToInt = function (s) {
    const symbolValue = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const cur = symbolValue[s[i]];
        const next = symbolValue[s[i + 1]];

        if (cur < next) {
            result += next - cur;
            i++;
        } else {
            result += cur;
        }
    }

    return result;
};


console.log(romanToInt(s1))
console.log(romanToInt(s2))
console.log(romanToInt(s3))