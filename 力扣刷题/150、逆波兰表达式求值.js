let evalRPN = function (tokens) {
    let stack = []
    tokens.forEach(item => {
        let a;
        let b;
        if (item === '+') {
            a = stack.pop()
            b = stack.pop()
            stack.push(a + b)
        } else if (item === '-') {
            a = stack.pop()
            b = stack.pop()
            stack.push(b - a)
        } else if (item === '*') {
            a = stack.pop()
            b = stack.pop()
            stack.push(b * a)
        } else if (item === '/') {
            a = stack.pop()
            b = stack.pop()
            stack.push(b / a > 0 ? Math.floor(b / a) : Math.ceil(b / a))
        } else {
            stack.push(parseInt(item))
        }
        console.log(stack);
    })
    return stack[0]
};


evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])


// 递归实现
let betterEvalRPN = function(tokens) {
    const map = {
        '*' : (a, b) => a * b,
        '/' : (a, b) => parseInt(a / b, 10),
        '+' : (a, b) => a + b,
        '-' : (a, b) => a - b
    }
    let fun = () => {
        let char = tokens.pop();
        if(map[char]){
            let num = fun(); //由于减法和除法的存在顺序问题,栈顶的操作
            return map[char](fun(), num);
        }else{
            return parseInt(char, 10);
        }
    }
    return fun();
};

// parseInt 能保留整数位而去除小数位。
