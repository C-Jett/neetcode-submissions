class Solution:

    def encode(self, strs: List[str]) -> str:
        # if input is empty, return empty
        # create an empty list [] to store len of each encoded_string
        # for each string, append its length to the size list
        # build a single string:
            # write all sizes separated by commas
            # add # to encode
            # append all strings in order

        if not strs:
            return ''

        sizes, res = [], ""
        print('sizes and res', sizes, res)
        for s in strs:
            sizes.append(len(s))
        for sz in sizes:
            res += str(sz)
            res += ','
        res += '#'
        for s in strs:
            res += s

        print('res', res)
        return res;





    def decode(self, s: str) -> List[str]:
        # if input is empty, return empty
        # read characters from the start until the #
            # parse each size by reading until a commas
        # after the #, extract substrings according to the sizes list
            # for each size read the len and append the substring to the result
        # return list of decoded strings       
        if not s:
            return []

        sizes, res, i = [], [], 0
        while s[i] is not '#':
            cur = ""
            while s[i] is not ',':
                cur += s[i]
                i += 1
            sizes.append(int(cur))
            i+=1
        i += 1
        for sz in sizes:
            res.append(s[i:i + sz])
            i += sz
        return res;
