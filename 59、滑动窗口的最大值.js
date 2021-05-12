let maxSlidingWindow = function (nums, k) {
    let test = []
    let result = []

    function max(arr) {
        let index = arr[0]
        arr.forEach(item => {
            index = Math.max(item, index)
        })
        return index
    }

    for (let i = 0; i < nums.length; i++) {
        if (i < k) {
            test.push(nums[i])
            if (test.length === k) {
                result.push(max(test))
            }
        } else {
            test.shift()
            test.push(nums[i])
            result.push(max(test))
        }
    }
    return result
};

let maxSlidingWindow2 = function (nums, k) {
    if (k <= 1) return nums;
    const res = [];
    for (let i = 0; i < nums.length - k + 1; ++i) {
        res.push(Math.max(...nums.slice(i, i + k)));
    }
    return res;
};


// 高级解法

let maxSlidingWindow3 = function (nums, k) {
    let queen = []
    let result = []
    if (nums === null || nums.length < k || k < 1) {
        return []
    }
    nums.forEach((item, index) => {
        if (index === 0) {
            queen.push(index)
        } else {
            while (item > nums[queen[queen.length - 1]]) {
                queen.pop()
            }
            queen.push(index)
            // 当队列头移除滑动窗口
            if (queen[0] <= index - k) {
                queen.shift()
            }
        }
        // 当滑动窗口滑动时，取出最大值
        if (index >= k - 1) {
            result.push(nums[queen[0]])
        }
    })
    return result
}

console.log(maxSlidingWindow3([1],1));


// Line 51 in solution.js
// throw new TypeError(__serialize__(ret) + " is not valid value for the expected return type integer[]");
// ^
// TypeError: null is not valid value for the expected return type integer[]
// Line 51: Char 20 in solution.js (Object.<anonymous>)
// Line 16: Char 8 in runner.js (Object.runner)
// Line 32: Char 26 in solution.js (Object.<anonymous>)
// Line 1251: Char 30 in loader.js (Module._compile)
// Line 1272: Char 10 in loader.js (Object.Module._extensions..js)
// Line 1100: Char 32 in loader.js (Module.load)
// Line 962: Char 14 in loader.js (Function.Module._load)
// at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
// Line 17: Char 47 in run_main_module.js