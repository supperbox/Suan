let leastInterval = function (tasks, n, h = Array(26).fill(0)) {
    if (n === 0) return tasks.length
    for (let i = 0; i < tasks.length; i++)
        h[tasks[i].charCodeAt() - 65]++
    let max = Math.max(...h), maxCount = 0
    console.log(h);
    h.forEach(n => n === max && maxCount++)
    console.log(h);
    return Math.max((max - 1) * (n + 1) + maxCount, tasks.length)
};

leastInterval(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"])


// 模拟，官方思路
// 1、 构造一个二元组，i（A,B），i是某类，其中A代表该类最早可执行的时间，B代表该类剩余的数量
// 2、 时间为time，不断增加一，并且不断去遍历二元组，寻找时间最早且最多的类，执行之
// 3、 如果time < 最早的时间（且次数最多），那么就直接time = 最早的时间

let leastTime = function (task, n) {
    // 获得类型以及计数
    let freq = _.countBy(task);
    // 找到对应的次数序列
    let lastArr = Object.values(freq)
    // 获得任务长度
    let x = task.length
    let y = lastArr.length
    // 构造最短时间序列,所有的类执行时间都从1开始
    let minTimeArr = new Array(y).fill(1)
    // 设置时间
    let time = 0;

    for (let i = 0; i < x; i++) {
        // 首先找到最早的时间
        time++
        let minTime = Number.MAX_VALUE
        for (let j = 0; j < y; j++) {
            minTime = Math.min(minTime, minTimeArr[j])
        }
        console.log(minTime);
        // 取最大的值作为时间值
        time = Math.max(time, minTime)
        console.log(time);
        // 设置该时间后，相应最早时间序列该类+n，次数减一
        let best = 0;
        // 寻找最早时间
        for (let j = 0; j < y; j++) {
            // 取得合适的类别（次数不为0，最早时间在以执行时间前或者当下）
            if( lastArr[j] && minTimeArr[j] <= time ){
                // 找寻最多次数的合适类别
                if( lastArr[j] >= lastArr[best]){
                     best = j
                }
            }
        }

        minTimeArr[best] = time + n + 1;
        lastArr[best]--
    }
    return time
}
console.log(leastTime(["A","A","A","A","A","A","B","C","D","E","F","G"],3));









