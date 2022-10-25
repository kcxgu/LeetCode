// 23 October 2022

// To try hashmap, which should reduce runtime but may not necessarily reduce memory.

let nums = [3, 3];
let target = 6;


// Runtime: 115ms
// Memory Usage: 42mb

let twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
};

console.log(twoSum(nums, target))
