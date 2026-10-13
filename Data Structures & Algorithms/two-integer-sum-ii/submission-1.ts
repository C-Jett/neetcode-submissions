class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let left = 0;
        let right = numbers.length - 1;

        while (left < right) {
            const sum = numbers[right] + numbers[left];
            if (target === sum) return [left+1, right+1];
            if (target < sum) {
                right--;
                continue;
            }
            if (target > sum) {
                left++;
                continue;
            }
        }

        return [];
    }
}
