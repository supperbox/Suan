var lengthOfLongestSubstring = function(s) {
    let length = 0;
    let arr = []
    for ( let i of s ){
        if( arr.indexOf(i) === -1 ){
            arr.push(i)
        }
        else{
            arr.push(i)
            let first = arr.indexOf(i)
            arr.splice(0,first+1)
        }
        console.log(arr);
        length = Math.max(arr.length,length)
    }
    return length
};


lengthOfLongestSubstring('pwwkew')