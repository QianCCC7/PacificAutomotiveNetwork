let toTop = document.getElementById("toTop")
// 点击按钮回到顶部时，匀速达到页面顶部
toTop.addEventListener("click", clickHandler);
function clickHandler(e) {
    let timer = setInterval(function () {
        var distanceY = document.documentElement.scrollTop || document.body.scrollTop;//兼容
        if (distanceY == 0){
            clearInterval(timer);
            return;
        } 
        let speed = 35;// 速度
        document.documentElement.scrollTop = distanceY - speed;
    }, 16);
}