class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        groups = defaultdict(list)

        for word in strs:
            sortedWords = "".join(sorted(word))
            groups[sortedWords].append(word)

        return list(groups.values())
