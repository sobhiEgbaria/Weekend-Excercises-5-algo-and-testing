/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 *
 * @description {Implement strStr().

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strStr() and Java's indexOf().
}
 

Example 1:

Input : haystack = "hello", needle = "ll"
Output : 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
 

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.
 */

const strStr = function (haystack, needle) {

    const arrHaystack = haystack.split("");

    const index = haystack.indexOf(needle[0])
    let tempt = index, chekLetters = true;

    for (let i = 0; i < needle.length; i++) {
       if(arrHaystack[tempt]== needle[i])
                tempt++;
                else {
                    chekLetters = false;
                    break; } 
            }          
            if (chekLetters == true ) return index; 
            else return -1;
};

        console.log(strStr("hello","ll"))
        console.log(strStr("aaaaa","bba"))
        console.log(strStr("sssobhi","sss"))

        module.exports = strStr;