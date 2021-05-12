let threeSumClosest = function (nums = []) {
    if (!nums || nums.length < 3) {
        return []
    }
    let result = []
    nums.sort((a, b) => {
        return a - b
    })
    console.log(nums);
    for (let i = 0; i < nums.length ; i++) {
        if (nums[i] > 0) {
            break
        }
        // 去重首个指针
        if (nums[i] === nums[i - 1]) continue
        let left = i + 1
        let right = nums.length - 1
        // 找关系，找变动的量
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (sum === 0) {
                // 记录值
                result.push([nums[i],nums[left],nums[right]])
                while (nums[left] === nums[left + 1]) {
                    left++
                }
                while (nums[right] === nums[right - 1]) {
                    right--
                }
                left++
                right--
            }
            else if(sum > 0){
                right--
            }
            else if(sum < 0){
                left++
            }
        }
    }
    return result
};

console.log(threeSumClosest([-1, 0, 1, 2, -1, -4]));

