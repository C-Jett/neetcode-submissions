class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_price = prices[0]
        best_profit = 0

        left, right = 0,1

        while right < len(prices):
            if (prices[left] < prices[right]):
                diff = prices[right] - prices[left]
                best_profit = max(best_profit, diff)
            else:
                left = right
            
            right += 1
        return best_profit