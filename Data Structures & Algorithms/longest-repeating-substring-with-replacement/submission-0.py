class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        counts = [0] * 26
        left = 0
        max_freq = 0
        best = 0

        for right in range(len(s)):
            # like saying 66-65 as A is 65 so it goes in index 1 for letter B
            idx = ord(s[right]) - ord("A")
            counts[idx] += 1
            # now we have found our max number of existing values and which letter is associated
            max_freq = max(max_freq, counts[idx])

            while (right - left + 1 - max_freq) > k:
                counts[ord(s[left]) - ord('A')] -= 1
                left += 1

            best = max(best, right - left + 1)
        
        return best
