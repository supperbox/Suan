var isSubsequence = function(s, t) {
    let j = 0
    for(let i = 0 ; i < t.length ; i++){
        if(t[i] === s[j]){
            j++
        }
        console.log(j)
    }
    return j === s.length
};


console.log(isSubsequence('abc', 'ahbgdc'));