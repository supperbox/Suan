let longestValidParentheses = function (s) {
    let stack = []
    // let real = []
    let count = 0
    let length = 0
    let a = s.split('')
    a.forEach((item, index) => {
        console.log(item);
        if (item === '(') {
            stack.push(++count)
        } else {
            stack.push(--count)
        }
        if (count === -1) {
            length = Math.max(stack.length - 1, length)
            // 清空栈
            stack.splice(0, stack.length)
            // real.splice(0, real.length)
            // count置0
            count = 0
        }
    })
    // 最终剩下的一列数，正数结尾，求中间的有效长度
    if (stack.length) {
       stack.unshift(0);
       let index
       function getLength(i) {
           if(stack.length){
               index = stack.lastIndexOf(i) - stack.indexOf(i)
               stack.splice( 0,stack.lastIndexOf(i)+1)
               return index = Math.max(index,getLength(++i))
           }
           else{
               return index
           }
       }
       length = Math.max(getLength(0),length)
    }
    return length
};

console.log(longestValidParentheses("(())("));

// 高效堆栈解法

const longestValidParentheses = (s) => {
    let maxLen = 0;
    const stack = [];
    stack.push(-1);
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c === '(') {          // 左括号的索引，入栈
            stack.push(i);
        } else {                  // 遍历到右括号
            stack.pop();          // 栈顶的左括号被匹配，出栈
            if (stack.length) {   // 栈未空
                const curMaxLen = i - stack[stack.length - 1];  // 计算有效连续长度
                maxLen = Math.max(maxLen, curMaxLen);           // 计算最大值
            } else {              // 栈空
                stack.push(i);    // 入栈充当起始标志牌
            }
        }
    }
    return maxLen;
};

longestValidParentheses("(())(")

// 动态规划
// 类似递归解决子问题；

const longestValidParentheses = (s) => {
    let maxLen = 0;
    const len = s.length;
    const dp = new Array(len).fill(0);
    for (let i = 1; i < len; i++) {
        if (s[i] === ')') {
            if (s[i - 1] === '(') {
                if (i - 2 >= 0) {
                    dp[i] = dp[i - 2] + 2;
                } else {
                    dp[i] = 2;
                }
            } else if (s[i - dp[i - 1] - 1] ==='(') {
                if (i - dp[i - 1] - 2 >= 0) {
                    dp[i] = dp[i - 1] + 2 + dp[i - dp[i - 1] - 2];
                } else {
                    dp[i] = dp[i - 1] + 2;
                }
            }
        }
        maxLen = Math.max(maxLen, dp[i]);
    }
    return maxLen;
};

longestValidParentheses()