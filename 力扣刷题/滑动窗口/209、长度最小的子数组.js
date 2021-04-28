console.log('fight',111);

// 这个是和等于版本
// let minSubArrayLen = function(target, nums) {
//     let r = 0
//     let l = 0
//     let sum = 0
//     let index = Number.MAX_VALUE
//     while( r < nums.length ){
//         sum += nums[r]
//         while( sum > target ){
//             console.log(r,sum);
//             sum -= nums[l]
//             l++
//         }
//         if(sum === target){
//             index = Math.min(r-l+1,index)
//         }
//         r++
//     }
//
//     return index === Number.MAX_VALUE ? 0 : index
// };


let minSubArrayLen = function (target, nums) {
    let r = 0
    let l = 0
    let sum = 0
    let index = Number.MAX_VALUE
    while (r < nums.length) {
        sum += nums[r]
        while (sum >= target) {
            // 找到所有大于目标数字的子串长度，取最小
            index = Math.min(r - l + 1 , index)
            sum -= nums[l]
            l++
        }
        r++
    }

    return index === Number.MAX_VALUE ? 0 : index
};

console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));