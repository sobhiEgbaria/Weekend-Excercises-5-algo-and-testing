/**
 * @param {string[]} strs
 * @return {string}
 *
 * @description {Write a function to find the longest common prefix string amongst an array of strings.
                If there is no common prefix, return an empty string "".}
 * 
 * Example 1 
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 *
 * Example 2
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 *
 */
              
const longestCommonPrefix = function (strs) {

        let reslt = [], chekLetters = true;

    for (let i = 0; i < strs[0].length; i++) {

        for (let j = 1; j < strs.length; j++) {

            if (strs[0][i]!=strs[j][i]){
                chekLetters = false; 
                break;}
        }
            if (chekLetters == false) break;

                    reslt.push(strs[0][i])

};
                            return reslt;}

console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix(["flower","flow","flight"]));

module.exports = longestCommonPrefix;
