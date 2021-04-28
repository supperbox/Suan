/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 属于我自己的偷懒的写法，运用了sort排序
let mergeTwoLists = function (l1, l2) {
    function getNum(a) {
        let n = 0
        let str = ''
        while (n < a.length) {
            str += a[n]
            n += 3
        }
        return str
    }
    let mergeStr = getNum(l1) + getNum(l2)
    let mergeArr = mergeStr.split('')
    mergeArr.sort()
    return mergeArr.join('->')
};

console.log(mergeTwoLists('1->2->4', '1->3->4'));

// 后来发现所给的链表是两个数组
// 再次尝试
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// let mergeTwoLists_two = function(l1,l2){
//         if(l1 === null){
//             return l2;
//         }
//         if(l2 === null){
//             return l1;
//         }
//         if(l1.val < l2.val){
//             l1.next = mergeTwoLists(l1.next, l2);
//             return l1;
//         }else{
//             l2.next = mergeTwoLists(l1, l2.next);
//             return l2;
//         }
//     };
