let findLongestWrd = function (s, dictionary) {
    dictionary.sort()
    dictionary.sort((a,b)=>{
      return b.length - a.length
    })
    console.log(dictionary);

    function check(a, b) {
        let l = 0, r = 0,isMatch = false
        while (l < a.length) {
                if(b[r] === a[l]){
                    // sum.push(r)
                    r++
                }
                l++
        }
        if(r === b.length){
            isMatch = true
        }
        return isMatch
    }
    let result
    for(let i in dictionary){
        let temp = check(s,dictionary[i])
        if(temp){
            result = dictionary[i]
            break
        }
    }
    return result
};


console.log(findLongestWrd("abpcplea", ["ale",'aplea', "apple",'am','alb', "monkey", 'abc',"aba"]));




