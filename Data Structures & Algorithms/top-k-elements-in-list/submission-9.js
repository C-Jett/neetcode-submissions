class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // 1. Count: number -> frequency 
        const counts = new Map();
        for (const num of nums) {
            counts.set(num, (counts.get(num) ?? 0) + 1);
        }

        // 2. Bucket: buckets[i] = numbers that appear exactly 1 times
        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        for (const [num, count] of counts) {
            buckets[count].push(num);
        }

        // 3. Collect: walk from highest frequency down until we have k
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
