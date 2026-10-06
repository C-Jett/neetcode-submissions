class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i];
            
            if (numMap.has(diff) == true) {
                return [numMap.get(diff), i];
            }

            numMap.set(nums[i], i);
        }

        return [];
    }
}
