
 var info_img=document.querySelector('.info_img');
 
 var minner=document.querySelector('.minner')

var sear=window.location.search.split('=')[1];
console.log(sear)
var banner=document.createElement('img');
banner.src=aData[sear].img;
info_img.appendChild(banner)

//放大镜图片
var minnerImg=document.createElement('img')
minnerImg.src=aData[sear].minnerImg;
minnerImg.className='moveImg';
minner.appendChild(minnerImg)

//缩略图
var slt=document.querySelector('#slt')
console.log(aData[sear].suolueImg.length)
for(var i=0;i<aData[sear].suolueImg.length;i++){
	var li=document.createElement('li');
	li.innerHTML='<img src="'+aData[sear].suolueImg[i]+'" />'
	slt.appendChild(li)
}
//颜色
var choice=document.querySelector('#choice');
for(var i=0;i<aData[sear].color.length;i++){
	var li=document.createElement('li');
	li.innerHTML='<img src="'+aData[sear].color[i]+'" />'
	choice.appendChild(li)
}
$('.index b').html(aData[sear].price)
//尺寸
var size=document.querySelector('.size');
for(var i=0;i<aData[sear].size.length;i++){
	var oA=document.createElement('a');
	oA.innerHTML=aData[sear].size[i];
	size.appendChild(oA)
}

//模特照片
var moder=document.querySelector('.moder');
for(var i=0;i<aData[sear].moderShow.length;i++){
	var img=document.createElement('img');
	img.src=aData[sear].moderShow[i];
	moder.appendChild(img)
}
var jianjie=document.querySelector('.jianjie');
jianjie.innerHTML=`
	<li>品牌：${aData[sear].barnd}</li>
	<li>款名：${aData[sear].name}</li>
	<li>款号：${aData[sear].nub}</li>
	<li>分类： ${aData[sear].type}</li>
	<li>吊牌价：${aData[sear].price}</li>
	<li>季节：${aData[sear].seaon}</li>
	<li>系列：${aData[sear].list}</li>
	<li>性别：${aData[sear].sex}</li>
`;

$('#xq').html(aData[sear].name);
$('.barnd>div').html(aData[sear].jieshao)
var fix=document.querySelector('.fix');
window.addEventListener('scroll',function(){
	if(window.pageYOffset>=850){
		fix.style.top=0;
	}else{
		fix.style.top=-100+'px';
	}
})
$('#add').on('click',function(){
	$('#nub').val(parseFloat($('#nub').val())+1)
})
$('#reduce').on('click',function(){
	if($('#nub').val()>=1){
		$('#nub').val(parseFloat($('#nub').val())-1)
	}else{
		return;
	}
	
})
$('.color li').on('mouseenter',function(){
	$(this).css('border','1px solid red')
})
$('.color li').on('mouseleave',function(){
	$(this).css('border','1px solid #ccc')
})
$('.size a').on('mouseenter',function(){
	$(this).css('border','1px solid red')
})
$('.size a').on('mouseleave',function(){
	$(this).css('border','1px solid #ccc')
})

info_img.addEventListener('mouseenter',function(ev){
	var moveImg=document.querySelector('.moveImg');
	var div=document.createElement('div');
	div.className='item';
	this.appendChild(div);
	minner.style.display='block'
	//console.log(this.offsetHeight,this.offsetWidth)
	info_img.addEventListener('mouseleave',function(eve){
		div.remove();
		minner.style.display='none'
	})
	
	
	//
	
	//console.log(this.offsetTop,this.offsetLeft)
	var disx=ev.pageX-160-div.offsetWidth/2;//这里的160和200是goods_info的offsetLeft和offsetTop,直接this为0
	var disy=ev.pageY-200-div.offsetHeight/2;
	//console.log(disx,disy)
	var maxL=info_img.clientWidth-div.offsetWidth;//item出现的最大left值
	var maxT=info_img.clientHeight-div.offsetHeight;//item出现的最大top值
	
	if(disx>maxL){
		disx=maxL;
	}else if(disx<0){
		disx=0;
	}
	if(disy>maxT){
		disy=maxT
	}else if(disy<0){
		disy=0;
	}
	// console.log(disx)
	div.style.left=disx+'px';
	div.style.top=disy+'px';
	
	
	info_img.addEventListener('mousemove',function(e){
		e=e||window.event;
		var x=e.pageX-160-div.offsetWidth/2;
		var y=e.pageY-200-div.offsetHeight/2;
		
		if(x>maxL){
			x=maxL;
		}else if(x<0){
			x=0
		}
		if(y>maxT){
			y=maxT
		}else if(y<0){
			y=0
		}
		div.style.left=x+'px';
		div.style.top=y+'px';
		
		//获取一个div比例值
		var b_l=x/maxL;
		var b_T=x/maxT;
		
		var moveImgW=moveImg.offsetWidth-minner.offsetWidth;
		var moveImgH=moveImg.offsetHeight-minner.offsetHeight;
		
		moveImg.style.left=-moveImgW*b_l+'px';
		moveImg.style.top=-moveImgH*b_T+'px';
		
		 
		
	})
})


$('.goods_info .list li').on('click',function(){
	$('.goods_info .info_img img').attr('src',$(this).children('img').attr('src'))
	$('.goods_info .minner img').attr('src',$(this).children('img').attr('src'))
})

$('#addBag').on('click',function(){
	
	var getL=localStorage.getItem('id');
	if(getL){
		localStorage.setItem('id',getL+','+JSON.stringify(aData[sear]))
		//console.log(getL)
	}else{
		localStorage.setItem('id',JSON.stringify(aData[sear]))
	}
})