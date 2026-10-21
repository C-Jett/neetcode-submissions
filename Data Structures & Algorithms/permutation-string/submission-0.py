class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        # Check if s1 is larger, then it's impossible to match
        if len(s1) > len(s2):
            return False

        # Create dict of characters between A-Z
        s1Count = [0] * 26
        s2Count = [0] * 26
        matches = 0
        l = 0

        # Get the count for both the s1 and s2 letters
        for i in range(len(s1)):
            s1Count[ord(s1[i]) - ord("a")] += 1
            s2Count[ord(s2[i]) - ord("a")] += 1

        # Loop through a O(c) set of range so we can hit our O(n) later.
        # Counts matches and skip non matches
        for i in range(26):
            if s1Count[i] == s2Count[i]:
                matches += 1
            else:
                matches += 0

        for r in range(len(s1), len(s2)):
           
            # If it's A-Z AKA 26 for both, we just return true
            if matches == 26:
                return True

            index = ord(s2[r]) - ord("a")
            s2Count[index] += 1
            if s1Count[index] == s2Count[index]:
                matches += 1
            elif s1Count[index] + 1 == s2Count[index]:
                matches -= 1

            index = ord(s2[l]) - ord("a")
            s2Count[index] -= 1
            if s1Count[index] == s2Count[index]:
                matches += 1
            elif s1Count[index] - 1 == s2Count[index]:
                matches -= 1
            l += 1
        
        return matches == 26
