let threeSumClosest = function (nums, target) {
    nums.sort((a, b) => {
        return a - b
    })
    console.log(nums);

    let gap = Number.MAX_VALUE
    let result

    for( let i = 0; i < nums.length ; i ++ ){
        let L = i+1
        let R = nums.length - 1
        let sum
        while( L < R ){
            sum = nums[i] + nums[L] + nums[R]
            let index = gap
            gap = Math.min(Math.abs(sum - target),gap)
            if( gap !== index){
                result = sum
            }


            if(sum === target){
                break
            }
            else if(sum > target){
                R--
            }
            else if(sum < target){
                L++
            }
        }
        if(sum === target){
            break
        }
    }
    return result
};

console.log(threeSumClosest([-1, 2, 1,4, 7,-4,6], 8));


































