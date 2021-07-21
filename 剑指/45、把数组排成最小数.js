/**
 * @param {number[]} nums
 * @return {string}
 */
let minNumber = function (nums) {
    nums.sort((a, b) => {
        let m = String(a)
        let n = String(b)
        console.log(a, b, m, n);
        if (m[0] > n[0]) {
            return 1
        } else if (m[0] < n[0]) {
            return -1
        } else {
            // 记录头节点,相同的对比子串
            let key = m[0]
            while (m.length || n.length) {
                // 子串
                m = m.slice(1)
                n = n.slice(1)
                if (m && n) {
                    if (m[0] !== n[0]) {
                        return m[0] - n[0]
                    }
                } else if (m && !n) {
                    if (m[0] <= key) {
                        return -1
                    } else {
                        return 1
                    }
                } else if (!m && n) {
                    if (n[0] <= key) {
                        return 1
                    } else {
                        return -1
                    }
                }
            }
            return 0
        }
    })
    let result = ''
    for (let i of nums) {
        result += i
    }
    return result
};

console.log(minNumber([128, 12]));