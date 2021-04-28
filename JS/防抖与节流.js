function showTop  () {
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    console.log('滚动条位置：' + scrollTop);
}
window.onscroll  = showTop