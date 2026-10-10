class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counts = new Map();
        for (const num of nums) {
            counts.set(num, (counts.get(num) ?? 0) + 1);
        }

        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        for (const [num, count] of counts) {
            buckets[count].push(num);
        }

        console.log(buckets);

        const result = [];
        for (let i = buckets.length - 1; i >= 0; i--) {
            for (const num of buckets[i]) {
                result.push(num);
                if (result.length === k) return result;
            }
        }
        return result;
    }
}
