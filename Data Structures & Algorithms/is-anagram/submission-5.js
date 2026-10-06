class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length != t.length) return false;
        
        let array1 = s.split('').sort();
        let array2 = t.split('').sort();

        return array1.join() == array2.join();


    }
}
