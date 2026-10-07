class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = new Map();
        for (const word of strs) {
            // loop through array
            const key = word.split("").sort().join(""); // split, sort and join, making O(n*k log k) but tradeoff is simpler
            if (!groups.has(key)) groups.set(key, []); // set the key if it doesnt exist to push to it later
            groups.get(key).push(word);
        }
        return [...groups.values()];
    }
}
