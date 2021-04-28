function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let removeNthFromEnd = function(head, n) {
    let preHead = new ListNode(0)
    preHead.next = head
    let fast = preHead, slow = preHead
    // 提前走n步
    while(n--) {
        fast = fast.next
    }
    // fast、slow 一起前进
    while(fast && fast.next) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return preHead.next
};

// 本质上慢指针要走到倒数第 n - 1 的位置，所以快指针要比慢指针快 n 步，当快
// 指针走到最后时，慢指针能够走到该位置。


