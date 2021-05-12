var mySqrt = function(x) {
    let le = 0
    let ri = x
    let mid = Math.floor((le+ri)/2)
    if(x === 1){
        return 1
    }

    while(ri >= le){
        if(mid * mid > x){
            ri = mid
        }else {
            if((mid + 1)*(mid + 1) > x){
                return  mid
            }
            le = mid
        }
        mid = Math.floor((le+ri)/2)
    }
};

console.log(mySqrt(600));


let a = Infinity
console.log(a > 1);