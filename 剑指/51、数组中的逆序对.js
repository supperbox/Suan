function check(nums){
    let count = 0
    function sort(nums) {
        if(nums.length < 2) return nums
        let middle = Math.floor((nums.length - 1)/2)
        return  merge(sort(nums.slice(0,middle+1)),sort(nums.slice(middle+1)))
    }

    function merge(arr1,arr2) {
        let arr = []
        while(arr1.length && arr2.length){
            if(arr1[0] > arr2[0]){
                count += arr1.length
                arr.push(arr2[0])
                arr2 = arr2.slice(1)
            }else {
                arr.push(arr1[0])
                arr1 = arr1.slice(1)
            }
        }
        if(arr1.length) arr = arr.concat(arr1)
        if(arr2.length) arr = arr.concat(arr2)
        return arr
    }
    sort(nums)
    return count
}

console.log(check([4, 1, 23, 5, 6]));