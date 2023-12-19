window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    // 如果页面顶部到滚动条顶部的垂直距离大于20像素就让侧边栏显示
    if (document.documentElement.scrollTop > 20) {
        var st = document.getElementById("leftSide").style;
        st.opacity = 1;
    } else {
        var st = document.getElementById("leftSide").style;
        st.opacity = 0;
    }
}