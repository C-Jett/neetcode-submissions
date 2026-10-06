class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # res = {};
        res = defaultdict(list) #mapping charCount to list of Anagrams
        
        for s in strs:
            count = [0] * 26 # a-z

            for c in s:
                count[ord(c) - ord("a")] += 1

                # ord returns unicode
                # imagine c is some number in unicode and a is reducing by 1

            res[tuple(count)].append(s);

        return list(res.values());
