class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        # prefix and suffix Solution
        # iterate from left to right and store the prefix product for each index in the prefix array, exluding own index
        # iterate from right to left and store the suffix products for each index in the suffix array, exlude own index

        num_len = len(nums)
        res = [1] * num_len # creates [1,1,1,1...] of length of array

        prefix = 1
        for i in range(num_len):
            res[i] = prefix
            prefix *= nums[i]

        # ends up being [1, 2, 6, 24]

        suffix = 1
        for i in range(num_len - 1, -1, -1): # range(start [starts at len-1], stop(-1), step backwards (-1))
            res[i] *= suffix # res i will multiply with the suffixes
            suffix *= nums[i] # set next value to calculate

        
        return res
        