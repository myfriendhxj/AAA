$('.setTab>div').on('click',function(){
	$(this).addClass('csstyle').siblings().removeClass('csstyle');
	$('.change>div').eq($(this).index('.setTab>div')).addClass('show').siblings().removeClass('show')
})
$('#user').on('focus',function(){
	$('#nameErr').html('请输入用户名或邮箱')
})
$('#phone').on('focus',function(){
	$('#nameErr2').html('请输入手机号码')
})
$('#usercard').on('focus',function(){
	$('#nameErr3').html('请输入卡号')
})
$('#usercard').on('input',function(){
	$('#nameErr3').html('ok')
})
$('#user').on('input',function(){
	var mail=this.value.trim();
	
	if(!(/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(mail))){
		$('#nameErr').html('邮箱格式不正确')
	}else{
		$('#nameErr').html('ok')
	}
})
$("#password").on('input',function(){
	if(/^(\w){6,20}$/.test(this.value)){//    /^(\w){6,20}$/ 校验密码：只能输入6-20个字母、数字、下划线  
		$('#passErr').html('ok')
	}else{
		$('#passErr').html('请输入正确的密码')
	}
})
$('#phone').on('input',function(){
	var phone = document.getElementById('phone').value.trim();
	if(!(/^1[3456789]\d{9}$/.test(phone))){
		$('#nameErr2').html('手机格式不正确')
	}else{
		$('#nameErr2').html('ok')
	}
})
$("#password2").on('input',function(){
	if(/^(\w){6,20}$/.test(this.value)){//    /^(\w){6,20}$/ 校验密码：只能输入6-20个字母、数字、下划线  
		$('#passErr2').html('ok')
	}else{
		$('#passErr2').html('请输入正确的密码')
	}
})
$("#password3").on('input',function(){
	if(/^(\w){6,20}$/.test(this.value)){//    /^(\w){6,20}$/ 校验密码：只能输入6-20个字母、数字、下划线  
		$('#passErr3').html('ok')
	}else{
		$('#passErr3').html('请输入正确的密码')
	}
})
$('.bottom button').on('click',function(){
	window.location.href='reg.html'
})
function checkPhone(){ 
    var phone = document.getElementById('user').value;
    if(!(/^1[3456789]\d{9}$/.test(phone))){ 
        alert("手机号码有误，请重填");  
        return false; 
    } 
}