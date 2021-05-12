let a = 'jiangliweishiyigezhizhe'

console.log(a[1]);

var longestCommonPrefix = function(strs) {
    let result = ''
    let index = 0
    let arr = []
    while(true){
        index++
        for(let i = 0 ; i < strs.length ; i++){
            arr[i] = strs[i].substr(0,index)
        }
        if(arr.every( item => item === arr[0] )){
            result = arr[0]
        }
        else{
            break
        }
    }
    return result
};

// 能执行，但效率不高
console.log(longestCommonPrefix(['jiang', 'jian', 'jian']));

//
// let result = ''
// let str = strs[0]
// let len = str.length
// for(let i = 0 ; i < len ; i++){
//     if(strs.every( item => item[i] === str[i] )){
//         result += str[i]
//     }
//     else{
//         break
//     }
// }
// return result