//
// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
//
// 请你将两个数相加，并以相同形式返回一个表示和的链表。
//
// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头
//


// 输入：l1 = [2,4,3], l2 = [5,6,4]
// // 输出：[7,0,8]
// // 解释：342 + 465 = 807.

// console.log([1, 3, 4].fill(5, 1, 6));

let addTwoNumbers = function (l1, l2) {
    let lengthA = l1.length
    let lengthB = l2.length
    let lengthMax = Math.max(lengthA, lengthB) + 1
    l1 = l1.concat(new Array(lengthMax - lengthA).fill(0))
    l2 = l2.concat(new Array(lengthMax - lengthB).fill(0))
    console.log(l1);
    console.log(l2);
    let result = []
    let index = 0
    for (let i = 0; i < lengthMax; i++) {
        let add = l1[i] + l2[i] + index
        if ( add >= 10){
            result[i] = add - 10
            index = 1
        }
        else {
            result[i] = add
            index = 0
        }

    }
    result[result.length - 1] === 0 ? result.pop() : null
    return result
};

console.log(addTwoNumbers([1, 9, 2], [2, 3, 5, 2, 1, 4]));;

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val,next){
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next)
}

let addTwoNumbersB = function (l1, l2) {
        let node = new ListNode('head');
        let temp = node;//哑结点
        let add = 0;//是否进一
        let sum = 0;//新链表当前未取余的值 = 链表1值 + 链表2值 + add;

        //遍历，直到最长的都为空
        while(l1 || l2){
            sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add;
            temp.next = new ListNode(sum % 10);//取余则为新链表的值
            temp = temp.next;
            add = sum >= 10 ? 1 : 0;
            l1 && (l1 = l1.next);
            l2 && (l2 = l2.next);
        }
        add && (temp.next = new ListNode(add));
        return node.next;
}

console.log(addTwoNumbersB([1, 3, 5, 5, 2], [1, 5, 2]));
