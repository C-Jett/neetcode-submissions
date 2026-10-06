class Solution {
    /**
     * @param {number[]}
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums.sort();
        for (let numbers = 0; numbers < nums.length - 1; numbers++) {
            if (nums[numbers] === nums[numbers + 1]) {
                return true;
            }
        }

        return false;
    }
}
