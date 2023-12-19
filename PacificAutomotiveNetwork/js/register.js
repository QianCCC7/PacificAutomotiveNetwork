
// 检验手机号码的格式是否正确
function checkPhone(phone) {
    // 第一位为1，第二位为3-9的数字，其他位为0-9的数字
    var reg = /^1[3-9]\d{9}$/;
    return reg.test(phone);
}

// 检验用户密码的强度
function checkPassword1(password) {
    var level = 0;//默认密码强度等级是0级
    if( /[0-9]/.test(password) ){ //密码中是否有数字
        level++;
    }
    if( /[a-zA-Z]/.test(password) ){ // 判断密码中有没有字母
        level++;
    }
    if( /[^0-9a-zA-Z_]/.test(password) ){ // 判断密码中有没有特殊符号
        level++;
    }
    return level;// 最小的值是1,最大值是3
}
// 检验用户两次密码是否一致
function checkPassword2(pwd1, pwd2) {
    return pwd1 === pwd2;
}

var total = 0; // 记录是否所有信息填写完整
var phone = document.getElementById("phone")
// 手机号焦点消失事件
phone.onblur = function() {
    var res = checkPhone(phone.value);// 将表单的数据传入进行验证
    if (res == false) {
        alert("手机号码格式不正确")
        return;
    }
    total++;
}
// 验证码焦点消失事件
var code = document.getElementById("code")
code.onblur = function() {
    if (code.value !== "123456") {
        alert("验证码有误")
        return;
    }
    total++;
}
// 用户密码焦点消失事件
var pwd1 = document.getElementById("pwd1")
var pwd2 = document.getElementById("pwd2")
pwd1.onblur = function() {
    var pwd = pwd1.value;
    if (pwd.length < 6) {
        alert("用户密码长度过短，请重新输入!");
        pwd1.value = "";
        return;
    }
    var level = checkPassword1(pwd)
    if (level == 1) {
        document.getElementsByClassName("r_one")[0].innerText = "弱"
        document.getElementsByClassName("r_two")[0].innerText = ""
        document.getElementsByClassName("r_three")[0].innerText = ""
    } else if (level == 2) {
        document.getElementsByClassName("r_one")[0].innerText = ""
        document.getElementsByClassName("r_two")[0].innerText = "中"
        document.getElementsByClassName("r_three")[0].innerText = ""
    } else if (level == 3) {
        document.getElementsByClassName("r_one")[0].innerText = ""
        document.getElementsByClassName("r_two")[0].innerText = ""
        document.getElementsByClassName("r_three")[0].innerText = "强"
    }
    total++;
}
pwd2.onblur = function() {
    var res = checkPassword2(pwd1.value, pwd2.value)
    if (res === false) {
        alert("两次输入的密码不一致！")
    }
    total++;
}
// 同意协议焦点消失事件
var submit = document.getElementById("submie")
submit.onclick = function() {
    if (!document.getElementById("box").checked) {
        alert("请勾选协议！")
        return;
    }
    if (total < 4) {
        alert("有信息填写不完整！")
        return
    }
    alert("注册成功！")
}
