var result = 1;

$("#user").blur(function() {
	if($("#user").val() == "") {
		$("#user").focus();
		$("#error-user").html("!用户名必填").show();
		return;
	}
	checkUser()
})

function checkUser() {
	var str = $("#user").val();
	var reg = /^1[3587]\d{9}$/g;
	if(reg.test(str)) {
		return true

	} else {

		$("#error-user").html("用户名格式不对").show()
		$("#user").focus(function() {
			$("#user").val("")
		})
		return false;

	}
}

$("#password").blur(function() {
	checkpassword()
})

function checkpassword() {
	var safety = 0;
	var pwd = $("#password").val();

	if(pwd.length >= 6) {
		if(null !== pwd.match(/\d/)) {
			safety++;

		}
		if(null != pwd.match(/[a-zA-Z]/)) {
			safety++;

		}
		if(null != pwd.match(/[^a-zA-Z0-9]/)) {
			safety++;

		}
	}
	if(safety == 0) {
		result = 0;
	}
	var arr = ["请输入6位以上的密码", "弱", "中", "强"]

	$("#error-pwd").html(arr[safety]);
	result++

}
$("#confirmPwd").blur(function() {
	confirmPassword();
})

function confirmPassword() {
	var pw = $("#password").val();
	var confirmPw = $("#confirmPwd").val();

	if(pw != confirmPw) {
		$("#error-confirmpwd").html("两次密码不一致")

	} else {
		$("#error-confirmpwd").html("ok")
		result++
	}
}

$("#user,#password,#confirmPwd").blur(function() {
	if(result == 3) {
		$("#register").removeAttr("disabled")
	}
})

$('#register').click(function() {

	var user = $("#user").val();
	var pwd = $("#password").val();
	var tmpJSON = {
		"status": "register",
		"userID": user,
		"password": pwd
	}
	console.log(tmpJSON);
	$.ajax({
		type: 'post',
		url: 'http://datainfo.duapp.com/shopdata/userinfo.php',
		data: tmpJSON,
		success: function(data) {
			console.log(data);
			location.href="login.html"
		},
		error: function() {
			console.log("error")
		}
	})

})