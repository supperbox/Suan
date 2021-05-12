let romanToInt = function (s = '') {
    let newS = s.replace(/IV/g, "Q").replace(/IX/g, "W").replace(/XL/g, "E").replace(/XC/g, "R").replace(/CD/g, "T").replace(/CM/g, 'Y')
    console.log(newS);
    let arr = newS.split('')
    console.log(arr);
    let result = 0;
    for (let i of arr) {
        switch (i) {
            case 'I':
                result += 1;
                break
            case 'V':
                result += 5;
                break
            case 'X':
                result += 10;
                break
            case 'L':
                result += 50;
                break
            case 'C':
                result += 100;
                break
            case 'D':
                result += 500;
                break
            case 'M':
                result += 1000;
                break
            case 'Q':
                result += 4;
                break
            case 'W':
                result += 9;
                break
            case 'E':
                result += 40;
                break
            case 'R':
                result += 90;
                break
            case 'T':
                result += 400;
                break
            case 'Y':
                result += 900;
                break
        }
    }
    console.log(result);
    return result
}
romanToInt('MCMXCIV')



