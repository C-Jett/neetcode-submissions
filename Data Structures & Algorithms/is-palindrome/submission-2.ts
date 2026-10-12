class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            if (!this.isAlphanumeric(s[left])) {
                left++;
                continue;
            }

            if (!this.isAlphanumeric(s[right])) {
                right--;
                continue;
            }

            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }

            left++;
            right--;
        }

        return true
    }

    isAlphanumeric(ch: string): boolean {
        const char = ch.toLowerCase();
        return (char >= "a" && char <= "z") || (char >= "0" && char <="9");
    }
}
