var login=document.querySelectorAll('.login');
var list=document.querySelectorAll('.list');

for(var i=0;i<login.length;i++){
	login[i].index=i;
	login[i].onmouseenter=function(){
		list[this.index].style.display='block';
		this.style.boxShadow='0 -1px 5px #ccc'
		// list.style.border='1px solid #000'
		
	}
	login[i].onmouseleave=function(){
		list[this.index].style.display='none';
		this.style.boxShadow=''
	}
}
var backTOp=document.querySelector('.batop');
	//console.log(backTOp)
window.addEventListener('scroll',function(){
	if(window.pageYOffset>=400){
		backTOp.style.display='block'
		
	}else{
		backTOp.style.display='none'
	}
})
backTOp.onclick=function(){
	var num=window.pageYOffset;
	var timer=setInterval(function(){
		num-=50;
		window.scrollTo(0,num);
		if(num<=0){
			clearInterval(timer)
		}
	},50)
}

//下拉导航数据渲染
var lis=document.querySelectorAll('.lis');
//console.log(oData[0].type)
var ty=document.querySelectorAll('.ty');
for(var i=0;i<lis.length;i++){
	ty[i].index=i;
	ty[i].onmouseenter=function(){
		 lis[this.index].style.display='block'
		//this.children.style.display='block'
	}
	ty[i].onmouseleave=function(){
		lis[this.index].style.display='none'
	}
}
var typeinfo=[];	

for(var i=0;i<lis.length;i++){
	var ul=document.createElement('ul');
	// ul.className='lie';
	
	for(var j=0;j<oData[i].type.length;j++){
		//console.log(oData[i].type[j])
		ul.innerHTML+=`<li class="ti">${oData[i].type[j].name}
					
					
				</li>`;
		typeinfo.push(oData[i].type[j].typeinfo);
		
	}
	lis[i].appendChild(ul);
	
	
}
		console.log(typeinfo)
		var ti=document.querySelectorAll('.ti');
		
		for(var i=0;i<ti.length;i++){
			var ul=document.createElement('ul');
			
			for(var j=0;j<typeinfo[i].length;j++){
				
				ul.innerHTML+=`
						<li><a href="type.html?" class="aoS">${typeinfo[i][j]}</a></li>
				`;
				
			}
			
			ti[i].appendChild(ul)
		}
		
function loadImg(el){//懒加载
	for(var i=0;i<el.length;i++){
		(function(i){
			var elTop=el[i].getBoundingClientRect().top;
			//console.log(imgTop,window.innerHeight);
			if(elTop<=iH){
				setTimeout(function(){
					el[i].src=el[i].getAttribute('_src')
				},1000)
			}
		})(i)
	}
}			
			