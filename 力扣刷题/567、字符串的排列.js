let checkInclusion = function(s1, s2) {
    if(!s2){
        if(!s1){return true}
        return false
    }
    if(!s1  || s1.length > s2.length){
        return false
    }
    let map = new Map()
    for(let i of s1){
        map.has(i) ? map.set(i,map.get(i) + 1) : map.set(i,1)
    }
    let window = []
    for ( let i of s2 ){
        if( window.length < s1.length ){
            window.push(i)
            map.has(i) ? map.set(i,map.get(i) - 1) : null
        }
        else{
            window.push(i)
            map.has(i) ? map.set(i,map.get(i) - 1) : null
            let j = window.shift()
            map.has(j) ? map.set(j,map.get(j) + 1) : null
        }
        console.log(map);
        if(check()) return true
    }
    function check(){
        for(let i of s1){
            if( map.get(i) !== 0 ){
                return false
            }
        }
        return true
    }
    return false
};

console.log(checkInclusion("adc","dcda"));
