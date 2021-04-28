/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function(nums) {
    let n = 0
    while(n < nums.length) {
        if ( nums.lastIndexOf(nums[n]) > n) {
            nums.splice(n,1)
        }
        else{
            n++
        }
        console.log(nums,'n',n,'m',m);
    }
    return  nums.length
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));