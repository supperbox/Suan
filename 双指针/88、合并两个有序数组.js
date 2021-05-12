// let merge = function (nums1, m, nums2, n) {
//     let A = 0;
//     let B = 0;
//     let finalArr = [];
//     let c = m + n
//     console.log(c);
//     while (c--) {
//         if (A < m && (B >= n || nums1[A] <= nums2[B])) {
//             console.log('A');
//             finalArr.push(nums1[A])
//             A++
//         }
//         if(B < n && (A >= m || nums1[A] > nums2[B])){
//             console.log('B');
//             finalArr.push(nums2[B])
//             B++
//         }
//     }
//     return finalArr
// };

let merge = function (nums1, m, nums2, n) {
    let length = m + n - 1
    while (length >= 0 ) {
        if (m > 0 && (n <= 0 || nums1[m - 1] > nums2[n - 1])) {
            nums1[length] = nums1[m - 1]
            m--
        }
        else if (n > 0 && (m <= 0 || nums1[m - 1] <= nums2[n - 1])) {
            nums1[length] = nums2[n - 1]
            n--
        }
        length--
    }
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)

