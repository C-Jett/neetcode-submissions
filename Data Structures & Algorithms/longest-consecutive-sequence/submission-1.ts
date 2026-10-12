class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        // Brute force would require sorting so O(n log n) when we need O(n)
        // Create a set which removes duplicates, cuts down on runtime

        const numSet = new Set<number>(nums);
        let longest = 0;

        for (const num of numSet) {
            if (numSet.has(num-1)) continue; //optimized solution checks for this as well. 

            let length = 0;
            let current = num;
            while (numSet.has(current)) {
                current++;
                length++;
            }

            longest = Math.max(longest, length); //Add
        }

        return longest;
    }
}
