class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const nLen = nums.length;
        const answer: number[] = new Array(nLen).fill(1);

        // By calculating prefixs and suffixs on first pass, we can add O(1) to O(n) to keep it O(n)

        // Except itself/without division cant divide the total product
        // mentions prefix and suffix as 32 bit, so let's approach it from front and back

        // answer[i] should hold product of nums[0...i-1]
        let prefix = 1;
        for (let i = 0; i < nLen; i++) {
            answer[i] = prefix;
            prefix *= nums[i];
        }

        // Multiply answer[i] by the product of nums[i+1..n-1]
        let suffix = 1;
        for (let i = nLen - 1; i >= 0; i--) {
            answer[i] *= suffix;
            suffix *= nums[i];
        }

        return answer;
    }
}
