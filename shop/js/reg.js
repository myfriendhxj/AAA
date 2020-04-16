$('#username').on('blur',function(){// /^[a-zA-Z0-9_-]{4,20}$/
	if(/^[a-zA-Z0-9_-]{4,20}$/.test(this.value.trim())){
		$('#mes1').html('ok')
	}else{
		$('#mes1').html('请输入正确的格式')
	}
})
$('#nub').on('blur',function(){
	if(/^1[3456789]\d{9}$/.test(this.value.trim())){
		$('#mes2').html('ok')
		
	}else{
		$('#mes2').html('手机号码不正确')
	}
})