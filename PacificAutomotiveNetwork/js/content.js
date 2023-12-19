// 页面加载时，就给第一个 a标签添加 class属性
window.onload = function() {
    const p1 = document.getElementById("price1")
    p1.classList.add("hover-effect")
}
// 监听 a标签的悬浮事件
document.addEventListener('mouseover', function(event) {
    // 选中的 a标签的父标签不为空且必须有 price
    if (event.target.parentNode.classList != null
                        && event.target.parentNode.classList.length > 0
                        && event.target.parentNode.classList[0] === 'price') {
        const allA = document.querySelectorAll('a');
        // 遍历当前所有的 ul中所有的 a标签
        allA.forEach(link => {
            // 如果遍历到的 a标签不是选中的标签，那么就删除他的 class属性
            if (link.parentNode.classList[1] !== event.target.classList[1] && link.parentNode.classList[0] === 'price') {
                link.classList.remove('hover-effect');
            }
        });
        // 判断当前元素是否为a标签，注意使用A表示，如果是 a标签，才【持续】给它添加 class属性
        if (event.target.tagName === 'A') {
            event.target.classList.add("hover-effect")
        }
    }
});