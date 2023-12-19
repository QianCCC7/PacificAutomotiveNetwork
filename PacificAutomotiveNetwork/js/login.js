function checkPhoneNumAndPwd(phone, pwd) {
    if (phone === "12345678900" && pwd === "abc123456!") return true;
    return false;
}

var phone = document.getElementById("phone")
var pwd = document.getElementById("pwd")
var submit = document.getElementById("submit")
submit.onclick = function() {
    if (checkPhoneNumAndPwd(phone.value, pwd.value)) {
        var res = confirm("登录成功，是否跳转到主页面？")
        if (res == true) {
            console.log(111)
            location.href="../html/index.html"
        }
    } else {
        alert("账号或密码错误！")
    }
}