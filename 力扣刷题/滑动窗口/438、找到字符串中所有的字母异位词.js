console.log('jlw');

let findAnagrams = function (s, p) {
    let indexArr = []
    if (!s || (s && s.length < p.length)) {
        return indexArr
    }

    let needs = new Map()
    let needTypes = 0
    for (let i of p) {
        needs.has(i) ? needs.set(i,needs.get(i) + 1 ) :  needs.set(i,1) ;
    }
    needTypes = needs.size

    let l = 0
    let r = 0

    while (r < s.length){
        if(needs.has(s[r])){
            needs.set(s[r],needs.get(s[r]) - 1)
            if( needs.get(s[r]) === 0 ){
                needTypes--
            }
        }


        while( r-l === p.length){
            if(needs.has(s[l])){
                if( needs.get(s[l]) === 0 ){
                    needTypes++
                }
                needs.set(s[l],needs.get(s[l]) + 1)
            }
            l++
            console.log(needs);
        }

        if(needTypes === 0){
            // console.log(l,r);
            indexArr.push(l)
        }
        r++
    }
    return  indexArr
};

console.log(findAnagrams('asvsetgdsfsv', 'sv'));

//var findAnagrams = function (s, p) {
//     const res = [], win = {}, need = {}, pLen = p.length;
//     let len = 0, val = 0;
//     for (const x of p) {
//         if (need[x] === undefined) {
//             need[x] = win[x] = 0;
//             len++;
//         }
//         need[x]++;
//     }
//     for (let i = 0; i < s.length; i++) {
//         const j = i - pLen;
//       // 这种in操作---学到了，也是在检查匹配个数以加减所需匹配类型个数
//         if (s[i] in need && ++win[s[i]] === need[s[i]]) val++;
//         if (s[j] in need && win[s[j]]-- === need[s[j]]) val--;
//         if (val === len) res.push(j + 1);
//     }
//     return res;
// };