class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const sortedArray = nums.sort((a, b) => a - b);
        const isAllPositiveNum = sortedArray[0] > 0;
        let result = [];

        if (!isAllPositiveNum) {
            for (let i = 0; i < sortedArray.length; i++) {
                let left = i + 1;
                let right = sortedArray.length - 1;
                if (i > 0 && sortedArray[i] === sortedArray[i - 1]) continue;
                while (left < right) {
                    let sum = nums[i] + nums[left] + nums[right];

                    // is the number too small?
                    if (sum < 0) {
                        left++;
                        continue;
                    }

                    // is the number too large?
                    if (sum > 0) {
                        right--;
                        continue;
                    }

                    if (sum === 0) { 
                        result.push([nums[i], nums[left], nums[right]]);
                        left++;
                        while (nums[left] === nums[left - 1]) left++;
                    };
                }
            }
        }

        return result;
    }
}
