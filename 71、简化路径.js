// 个人解法
// 枚举所有情况，并给出对应解法，利用stack入栈元素，利用count记录斜杠下标。

let simplifyPath = function (path) {
    let stack = []
    let count = [0]
    if (path[path.length - 1] !== '/') {
        path = path + '/'
    }
    for (let i = 0; i < path.length; i++) {
        let index = path[i]
        let peek = count.length - 1
        stack.push(index);
        if (index === '/' && i > 0) {

            if (i === count[peek] + 1) {
                stack.pop()
            } else if (i === count[peek] + 2 && path[i - 1] === '.') {
                stack.splice(stack.lastIndexOf('/', -2) + 1, path.length)
            }
            // 当遇到。。时候往前找第二个斜杠（上寻一级目录），删除小于i个数会删到末尾为止
            else if (i === count[peek] + 3 && path[i - 1] === '.' && path[i - 2] === '.') {
                if (stack.length === 4) {
                    stack = ['/']
                } else {
                    stack.splice(stack.lastIndexOf('/', -5) + 1, path.length)
                }
            }
            // 将下标压入计数栈
            count.push(i)
        }
    }
    if (stack[stack.length - 1] === '/' && stack.length > 1) {
        stack.pop()
    }
    console.log(stack.join().replace(/,/g, ''));
    // return stack.join().replace(/,/g, '')
    let result = ''
    stack.forEach( i =>{
        result = result + i
    })
    return result
};


simplifyPath("/a//b////c/d//././/..");

// 标准解法
function betterSimplifyPath() {
    const dir = path.split('/'), stack = []
    for (const i of dir) {
        // 遇到。和‘’则略过
        if (i === '.' || i === '') continue
        if (i === '..') {
            // 如果此时前面有值，则弹出，无值，则不进行操作。
            stack.length > 0 ? stack.pop() : null
            continue
        }
        stack.push(i)
    }
    return '/' + stack.join('/')
}



