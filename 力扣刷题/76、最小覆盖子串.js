var minWindow = function (s, t) {
        let index = 0;
        let childString = ''
        let map = new Map()
        let matchMap = new Map()
        let needType = 0;

        // 维护两个哈希表
        for (let i of t) {
            matchMap.set(i,0)
            if(map.has(i)){
                map.set(i,map.get(i) + 1)
            }
            else{
                map.set(i,1)
                needType ++
            }
        }

        for (let i in s) {
            if ( matchMap.has(s[i])) {
                matchMap.set(s[i], matchMap.get(s[i]) + 1)
                if(matchMap.get(s[i]) === map.get(s[i])){
                    needType--
                }
            }
            // 如果有匹配
            if (!needType) {
                // 传入匹配的字符子串
                findLeast(s.slice(index, Number(i) + 1))
                // 输出下一次
            }
            // 发现匹配，从头开始
        }

        function findLeast(string) {

            let length = string.length

            if (childString.length === 0 || string.length < childString.length) {
                childString = string
            }
            for (let i = 0; i < length; i++) {
                let first = string.slice(0, 1)
                string = string.slice(1)

                if (matchMap.has(first)) {
                    if(matchMap.get(first) === map.get(first)){
                        needType++
                    }
                    matchMap.set(first,matchMap.get(first) - 1)
                }

                if (!needType) {
                    console.log(string, 'match');
                    if (childString.length === 0 || string.length < childString.length) {
                        childString = string
                    }
                } else {
                    console.log(childString,'匹配项目');
                    // 一个匹配单项
                    index += i + 1
                    break
                }

            }
            console.log(index);
        }

        // 有一个输入次数为0则不匹配
        // function checkTimes() {
        //     let isMatch = true
        //     for (let i of t) {
        //         if (matchMap.get(i) < map.get(i)) {
        //             isMatch = false
        //         }
        //     }
        //     return isMatch
        // }

        console.log(childString);
        return childString
    };

// 只能搞定不重复的子串
minWindow("aisgsabbbsasa", "aa")

