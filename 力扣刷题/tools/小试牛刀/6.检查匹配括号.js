/**
 * @param {string} s
 * @return {boolean}
 */
// 自行完成，迭代思想
// 基本完成，但是性能较差
let isValid = function (s) {
    let checkArr
    checkArr = []
    if (s === '') checkArr.push(true)
    // 递归的结束标志
    let chars = new Map([['(', ')'], ['{', '}'], ['[', ']']]);
    let firstChar = s[0]
    // 找到所有匹配项的位置
    let n = 1, arr = []
    while (n < s.length) {
        let matchIndex = s.indexOf(chars.get(firstChar), n)
        if (matchIndex !== -1) {
            arr.push(matchIndex)
        } else {
            break
        }
        n = matchIndex + 1
    }
    // 没有匹配项
    if (arr.length === 0) {
        checkArr.push(false)
    }
    // 检索所有的匹配项，看有没有能使整体成功匹配的组合
    else {
        let flag1,flag2;
        for (let i = 0; i < arr.length; i++) {
            flag1 = undefined
            flag2 = undefined
            // 当匹配项之前包含其他字符串
            if (arr[i] > 1) {
                let s1 = s.slice(1, arr[i])
                // 最终的递归情况，向左拆分，如果成功返回 true
                flag1 = isValid(s1)
            }
            // 当匹配项之后包含其他字符串
            if (arr[i] < s.length - 1) {
                let s2 = s.slice(arr[i] + 1, s.length)
                // 最终的向右拆分的情况，如果成功返回 true
                flag2 = isValid(s2)
                // console.log(flag2,'右侧检测');
            }
            // 匹配项左右都没有新字符，完成最终的匹配
            else if( arr[i] === 1 ){
                checkArr.push(true)
            }
            // else {
            //     flag2 = undefined
            // }
            // console.log(flag1, flag2,s);
            if (flag1 !== undefined && flag2 !== undefined) {
                checkArr.push(flag1 && flag2)
            }
            else if (flag1 !== undefined || flag2 !== undefined) {
                checkArr.push(flag1 || flag2)
            }
        }
    }
    return checkArr.includes(true)
};
console.log(isValid('[[[[[[()]]]]]]'))

// 堆栈思想
/**
 * @param {string} s
 * @return {boolean}
 */
let isValid_two = function(s) {
    let map = {
        '{': '}',
        '(': ')',
        '[': ']'
    }
    let stack = []
    for(let i = 0; i < s.length ; i++) {
        if( map[s[i]] )                         /*如果是左括号，将其压入堆栈中*/
        {
            stack.push(s[i])
        }
        else if( s[i]  !== map[stack.pop()] )   /*如果找到右括号，将栈顶数据取出，然后将其与栈顶数据比较，如果相同则继续循环，不同则返回错误*/
        {
            return false
        }
    }
    return stack.length === 0          /*最后堆栈清空，表示所有都已匹配完成或者原本是空字符串，则为成功*/
};

console.log(isValid_two('[[[[[[()]]]]]]'));

// 正则匹配
// 由内到外，层层消除
/**
 * @param {string} s
 * @return {boolean}
 */
let isValid_three = function(s) {
    if (s.length % 2 !== 0) return false;
    const len = s.length/2;
    for (let i = 0; i < len; i++) {
        s = s.replace(/\(\)|\[\]|\{\}/, ''); /*匹配到所有的小括号，然后将其替换为空字符串*/
    }
    return s.length === 0;
}

console.log(isValid_three('[[[[[[()]]]]]]'));
