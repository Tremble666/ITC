window.onload =(function() {
        $("#nav_6").addClass("active");
        $("#nav_2,#nav_3,#nav_4,#nav_5,#nav_1").removeClass("active");

});



//向后台发送Ajax请求
function send_to_back_userName(userId) {
    var userName = $("#username").val()
    $.ajax({
        url: '/XX',
        type: 'POST',
        data: 'userName=' + userName + '&userId=' + userId,
        success: function (data) {
        }
    });
}

function send_to_back_userIntro(userId) {
    var userIntro = $("#introduction").val();
    $.ajax({
        url: '/XX',
        type: 'POST',
        data: 'userIntro=' + userIntro + '&userId=' + userId,
        success: function (data) {
        }
    });
}

function send_to_back_userEmail(userId) {
    var userPasswd = $("#passwordr").val();
    var userEmail = $("#introduction").val();
    $.ajax({
        url: '/XX',
        type: 'POST',
        data: 'userPasswd=' + userPasswd + 'userEmail=' + userEmail + '&userId=' + userId,
        success: function (data) {
            toastr.success('邮箱修改成功！')
        },
        error: function (e){
            toastr.warn('密码错误！')
        }
    });
}

function send_to_back_userPhone(userId) {
    var userPhone = $("#phone").val();

    $.ajax({
        url: '/XX',
        type: 'POST',
        data: 'userPhone=' + userPhone + '&userId=' + userId,
        success: function (data) {
            toastr.success('已向您的邮箱发送确认邮件，请前往邮箱进行修改认定');
        }
    });
}

function send_to_back_userPasswd(userId) {
    var userPasswd = $("#password").val();

    $.ajax({
        url: '/XX',
        type: 'POST',
        data: 'userPasswd=' + userPasswd + '&userId=' + userId,
        success: function (data) {
            toastr.success('已向您的邮箱发送确认邮件，请前往邮箱进行修改认定');
        }
    });
}