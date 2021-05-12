var minWindow = function(s, t) {
    let index = -1 ;
    let childString = ''
    let map = new Map()
    for ( let i of t ){
        map.set(i,0)
    }

    for (let j of s) {
        index++
        if(map.has(j)){
            map.set(j,map.get(j) + 1)
        }
        if(checkTimes()){

        }
        // 发现匹配，从头开始
    }

    function findLeast(string) {

    }

    function checkTimes() {
        let isMatch = true
        for(let i of t){
            if( map.get(i) === 0){
                isMatch = false
            }
        }
        return isMatch
    }
};

// minWindow("ADOBECODEBANC","ABC")

console.log('jlw'[2]);
console.log('jlw');