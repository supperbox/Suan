
// 事件冒泡

let box1 = document.getElementById('a')
let box2 = document.getElementById('b')

box1.addEventListener("click", function (event) {
    alert('box1')
    console.log(event);
    console.log(event.target,'111');
},true)


// box2.addEventListener("click", function () {
//     alert('box2')
// },false)