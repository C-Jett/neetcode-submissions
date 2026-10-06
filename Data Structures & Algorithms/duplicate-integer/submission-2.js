class Solution {
    /**
     * @param {number[]}
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set();
        for (const n of nums) {
            if (seen.has(n)) return true
            seen.add(n);
        }
        return false
    }
}
