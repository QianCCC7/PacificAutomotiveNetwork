let pre = document.getElementById("pre")
let nxt = document.getElementById("nxt")
// 向左移
pre.onclick = function () {
    let lis = document.getElementsByClassName("price")
    let idx;
    // 遍历所有的li,找到其中a标签携有hover-effect或者price1属性的那个li
    for (let i = 0; i < lis.length; i++) {
        let li = lis[i];
        let childList = li.children[0].classList;// a标签的class属性
        if (i != 11) {
            if (childList != undefined && (childList[0] === "price1" || childList[0] === "hover-effect")) {
                idx = i;
            }
        } else {
            // 第11个特殊，特判第二个子元素即a标签是否含有hover-effect属性
            if (lis[11].children[1].classList != undefined && lis[11].children[1].classList[0] === "hover-effect") {
                idx = i;
            }
        }
    }
    lis[idx].children[lis[idx].children.length - 1].classList.remove("hover-effect");
    idx = (lis.length + idx - 1) % lis.length;
    lis[idx].children[lis[idx].children.length - 1].classList.add("hover-effect");
}

// 向右移
nxt.onclick = function () {
    let lis = document.getElementsByClassName("price")
    let idx;
    for (let i = 0; i < lis.length; i++) {
        let li = lis[i];
        let childList = li.children[0].classList;// a标签的class属性
        if (i != 11) {
            if (childList != undefined && (childList[0] === "price1" || childList[0] === "hover-effect")) {
                idx = i;
            }
        } else {
            if (lis[11].children[1].classList != undefined && lis[11].children[1].classList[0] === "hover-effect") {
                idx = i;
            }
        }
    }
    lis[idx].children[lis[idx].children.length - 1].classList.remove("hover-effect");
    idx = (idx + 1) % lis.length;
    lis[idx].children[lis[idx].children.length - 1].classList.add("hover-effect");
}