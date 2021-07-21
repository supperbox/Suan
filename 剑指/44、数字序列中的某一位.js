/**
 * @param {number} n
 * @return {number}
 */
let findNthDigit = function(n) {
    if(n < 10)return n

    // 求出n/9有几位数
    let m = Math.floor(Math.log10(n/9)) + 1

    // 根据位数判断第n位对应的数的位数
    let base = 0
    let tip = m
    while(tip > 0){
        base += tip*Math.pow(10,tip-1)
        tip--
    }


    if((n/9) > base){
        // 位数等于 m+1
        n -= base*9
        // 找到对应位数的个数
        let a = Math.ceil(n/(m+1))
        let b = n % (m+1)  ? n%(m+1) : (m+1)
        console.log(a, b);
        return Number(String(a - 1 + Math.pow(10,m))[b-1])

    }else{
        // 小于基准
        // 位数等于 m
        base = base%(Math.pow(10,m-1))
        n -= base*9
        let a = Math.ceil(n/m)
        let b = n%m ? n%m : m
        return Number(String(a - 1 + Math.pow(10,m-1))[b-1])

    }
};

// console.log(findNthDigit(11));
// console.log(findNthDigit(12));
// console.log(findNthDigit(13));
// console.log(findNthDigit(14));

console.log(findNthDigit(9));
console.log(findNthDigit(15));
