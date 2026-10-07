class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const index = new Map();
        for (let i = 0; i < nums.length; i++) {
            const value = target - nums[i];
            if (index.has(value)) return [index.get(value), i]
            index.set(nums[i], i);
        }
        return [];
    }
}
