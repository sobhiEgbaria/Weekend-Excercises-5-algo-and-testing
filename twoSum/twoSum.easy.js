/**
 *{Given an array of integers nums and an integer target,
 *  return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution,
 and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]}
 */


const nums1 = [15, 7, 11, 2], target1 = 9; //Example 1:
const nums2 = [3,2,4], target2 = 6       //Example 2:
const nums3 = [3,3], target3 = 6         //Example 3:

const twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length; j++) {
                if (j === i) continue;
                     let sum = nums[i] + nums[j];
                if (sum === target) {
                    return console.log(i, j);
                }
            }
        }
};
        twoSum(nums1,target1);
    
        module.exports = twoSum;
